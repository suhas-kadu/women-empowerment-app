import React from "react";
import ImageComponent from "./ImageComponent";
import ShortInfo from "./ShortInfo";

const SelfDefenceShortInfo = (props) => {
  return (
    <div>
      <section 
      // style={{backgroundColor:"#e7edfd"}}
       className="p-5 text-center text-sm-start">
        <div className="container">
          <div className="row justify-content-between align-items-center flex-row-reverse">
            <ShortInfo
              header="Self Defence"
              content="In a January 2018 survey of 1,000 women nationwide, 81 percent
                reported experiencing some form of sexual harassment, assault,
                or both in their lifetime. Verbal harassment was the most common
                form, but 51 percent of women said they were touched or grouped
                in an unwelcome way, while 27 percent of women survived sexual
                assault. That's why Self Defence becomes important"
              btnText="Learn more"
              href="/selfdefence"
              // padding="5"
            />

            <ImageComponent imageUrl="https://media.istockphoto.com/photos/female-athlete-practicing-with-trainer-picture-id835151772?b=1&k=20&m=835151772&s=170667a&w=0&h=N3Psux_t60znssiUOYnBv7u81EBF8yRjtDUQSnAK5PY=" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfDefenceShortInfo;
