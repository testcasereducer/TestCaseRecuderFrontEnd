import Image from "next/image";

export default function Doc({ steps }) {
    return (
        <div className="container">
            {steps.map((step, index) => {
                const col1 = (
                    <div className="col col-md-5 col-sm-12 col-12" key={`col-5-${index}`}>
                        <h3 className="display-6">{step.title}</h3>
                        <p className="">{step.description}</p>
                    </div>
                );

                const col2 = (
                    <div className="col col-md-7 col-sm-12 col-12" key={`col-7-${index}`}>
                        <Image
                            src={step.image.url}
                            alt={step.image.url}
                            width={step.image.width}
                            height={step.image.height}
                            layout="responsive"
                            objectFit="cover"
                            key={step.image.url}
                        />
                    </div>
                );

                return (
                    <div className="row mb-4" key={`row-${index}`}>
                        {index % 2 == 0 ? [col1, col2] : [col2, col1]}
                        <hr className="hr hr-blurry mt-4" />
                    </div>
                );
            })}
        </div>
    );
}
