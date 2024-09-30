const MapEmbed = () => {
  return (
    <div className="embed-container flex flex-col mt-10">
      <h1 className="mb-2 font-medium text-2xl">Peta Banjir Watusampu</h1>
      <iframe
        width="500"
        height="400"
        frameBorder="0"
        scrolling="no"
        // marginHeight="0"
        // marginWidth="0"
        title="bencana watusampu"
        src="//www.arcgis.com/apps/Embed/index.html?webmap=913e172548ce40638bf984b9185d3241&extent=119.8085,-0.8217,119.8138,-0.8193&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=false&theme=light"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapEmbed;
