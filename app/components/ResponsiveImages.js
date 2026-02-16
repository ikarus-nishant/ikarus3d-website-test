const ResponsiveImages = (props) => {
  let { src, sources, alt, className, loading, fetchPriority, ...rest } = props;

  // Set loading as "lazy" when it is "false" or "undefined",   https://web.dev/browser-level-image-lazy-loading/
  loading = !!loading ? loading : "lazy" ;
  // https://web.dev/fetch-priority/
  fetchPriority = !!fetchPriority ? fetchPriority : "auto";

  const getSizesAndSrcSet = (srcs) => {
    let width = 0;
    let sizes = "";
    let srcSet = "";

    // The names that are entered in sources should have the following format - "image_jotazh_c_scale,w_735.png"
    srcs.forEach((src) => {
      let splitSrcArr = src.split(",");
      width = splitSrcArr[splitSrcArr.length - 1].split("_")[1].split(".")[0];

      let srcTemplate = `${src} ${width}w`;
      let sizeTemplate = `(max-width: ${width}px) ${width}px`;

      sizes += sizeTemplate + ", ";
      srcSet += srcTemplate + ", ";
    });

    sizes += `${width}px`;
    srcSet = srcSet.slice(0, srcSet.length - 2); // srcSet.length-2 because we want to remove the ", " we have added for the last entry

    return { sizes, srcSet };
  };

  const { sizes, srcSet } = !!sources
    ? getSizesAndSrcSet(sources)
    : { sizes: null, srcSet: null };

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchPriority}
      {...rest}
    />
  );
};

export default ResponsiveImages;
