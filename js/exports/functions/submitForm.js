export async function submitForm(e, inputs, url, container, message) {
  e.preventDefault();
  const dataInFormDataFormat = new FormData(inputs);
  dataInFormDataFormat.append("_wpcf7_unit_tag", "f0a0ed8");
  try {
    container.innerHTML = `<div class="comment-posted">${message}</div>`;
    const fetchResponse = await fetch(url, {
      method: "post",
      body: dataInFormDataFormat,
    });
    const finishedResponse = await fetchResponse.json();
    return finishedResponse;
  } catch (error) {
    container.innerHTML = `<div class="comment-posted"><p>Hmm, something went wrong. It's ${error}</p></div>`;
  }
}
