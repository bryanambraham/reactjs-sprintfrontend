const DescriptionContent = ({ items, className = "" }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-3" data-aos="fade-up" data-aos-delay={index * 100}>
          {item.title && <h4 className="text-lg md:text-xl font-semibold text-text-primary">{item.title}</h4>}
          {item.content &&
            item.content.map((paragraph, pIndex) =>
              typeof paragraph === "string" ? (
                <p key={pIndex} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ) : (
                <div key={pIndex}>{paragraph}</div>
              ),
            )}
          {item.list && item.list.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {item.list.map((listItem, lIndex) => (
                <li
                  key={lIndex}
                  className="text-text-primary/70 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay={lIndex * 50}
                >
                  {listItem}
                </li>
              ))}
            </ul>
          )}
          {item.imageURL && item.imageAlt && (
            <div className="mt-4" data-aos="zoom-in">
              <img
                src={item.imageURL || "/placeholder.svg"}
                alt={item.imageAlt}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default DescriptionContent

