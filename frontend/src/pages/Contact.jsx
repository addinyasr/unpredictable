import React, { useState } from "react";
import logodpr from "../assets/images/logodprbaru.png" 
const contact = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };
  const handleAnonymousChange = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handlePrivateChange = () => {
    setIsPrivate(!isPrivate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submission logic here
    console.log("Form submitted:", {
      category,
      title,
      content,
      location,
      attachment,
      isAnonymous,
      isPrivate,
    });
    // Reset the form fields after submission
    setCategory("");
    setTitle("");
    setContent("");
    setLocation("");
    setAttachment(null);
    setIsAnonymous(false);
    setIsPrivate(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex items-center justify-center mb-6">
          <img
            src={logodpr} // Gantilah dengan path atau URL gambar Anda
            alt="Aspiration Image"
            className="h-32 w-32 object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Aspirasi Kita,
          </h2>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Kekuatan Kita
          </h2>
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold bg-sky-300 rounded-lg text-gray-900">
            KIRIM ASPIRASI ANDA
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px bg-white">
            <div>
              <label htmlFor="category" className="sr-only">
                Kategori Aspirasi
              </label>
              <input
                id="category"
                name="category"
                type="text"
                autoComplete="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kategori Aspirasi"
              />
            </div>
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Judul Aspirasi"
              />
            </div>
            <div>
              <label htmlFor="content" className="sr-only">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows="4"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Isi Aspirasi..."
              />
            </div>
            <div>
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Lokasi Aspirasi"
              />
            </div>
            <div>
              <label htmlFor="attachment" className="sr-only">
                Attachment
              </label>
              <input
                id="attachment"
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="anonymous"
              name="anonymous"
              type="checkbox"
              checked={isAnonymous}
              onChange={handleAnonymousChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="anonymous" className="text-sm text-gray-900">
              Nama Anda Tidak Akan Terpublikasi
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="private"
              name="private"
              type="checkbox"
              checked={isPrivate}
              onChange={handlePrivateChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="private" className="text-sm text-gray-900">
              Aspirasi Anda Tidak Akan Terpublikasi
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              KIRIM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
