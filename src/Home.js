import React, { useState } from "react";

const Home = ({age}) => {
  console.log("Age" + age);
  return (
    <>
      {age > 65 ? (
        <div>
          <img src="https://www.educationworld.in/wp-content/uploads/2019/06/OldageHomes.jpg" />
          <div className="content">
            <h2>What Services Do Seniors Need Most?</h2>
            <p>
              Aging is both a natural and inevitable part of life. Heading into
              the golden years is a moment people should embrace for what it is
              and the potential it holds.
            </p>
            <p>
              That said, it is also important to recognize the changes and
              possible limitations involved in the aging process. While
              maintaining a sense of independence is a priority for many aging
              adults, pinpointing those trouble areas that are easy to overlook.
            </p>
            <p>
              For many people, keeping a sense of empowerment and positivity
              intact often comes down to the decision to age in place. However,
              knowing where help is needed is a good strategy for staying safe
              and stronger for even longer! So, what services do seniors need
              most? Lets take a look.
            </p>
            <h3>Cleaning and Home Maintenance</h3>
            <p>
              Living in a safe, clean, and organized environment is vital for
              aging seniors. That said, cleaning tasks may not be as easy to
              complete as they once were.
            </p>
            <p>
              Many individuals who opt to age in place will need to incorporate
              house cleaning services into their lifestyle. Having professionals
              take care of a monthly deep clean and weekly dust-over can make a
              huge difference in eliminating the risk of falls and slips while
              cleaning.
            </p>
            <p>
              Those wondering what services do seniors need most? will also need
              to consider home maintenance standards. Activities like mowing the
              lawn, shoveling snow, or changing light bulbs might not be
              possible for a senior at a certain point. Having professionals or
              family members on hand to handle those tasks keeps a residence
              safe while reducing the risk of injury to a loved one.
            </p>
            <h3>Mobility Strategies and Resources</h3>
            <p>
              When looking at what services do seniors need most, mobility
              assistance often sits at the top of the list. Whether it is help
              moving around during an errand out or within their residence,
              keeping seniors safe begins with making mobility issues a
              priority.
            </p>
            <p>
              Changes to a home may be necessary to make independent mobility
              more accessible and less risky. An excellent place to start is
              widening doorways for wheelchairs, adding ramps, and making sure
              showers have handrails.
            </p>
            <p>
              As mobility issues become more of a concern, increasing the hours
              a caretaker spends at home may be necessary. Similarly, it may
              indicate that it is time to upgrade home enhancements to include
              chair lifts or even hospital beds.
            </p>
            <h3>Personal Care Standards</h3>
            <p>
              Just as they did when they were younger, senior citizens have to
              attend to personal care needs. That might include assistance with
              everything from grooming and bathing to dressing for the day
              ahead.
            </p>
            <p>
              In the vast majority of cases, a family member or home health
              professional will need to step in. Making sure the basics are
              covered daily is important for health standards and overall
              quality of life for seniors.{" "}
            </p>
            <h3>Transportation</h3>
            <p>
              It is common for seniors to give up their driving rights at a
              certain point in life. That may be due to cognitive or physical
              changes that make driving unsafe. Either way, giving up a license
              makes “driving assistance” a critical answer to the question, what
              services do seniors need most?
            </p>
            <p>
              It is important to have options in place for seniors so they can
              get where they need to go when they are no longer able to take
              themselves there. Perhaps you need to hire a dedicated caretaker
              who can get your elderly family member or loved one to necessary
              medical appointments. Or maybe you can find a local family member
              willing to drive them to social functions or help with errands.
            </p>
            <h3>Medication Control</h3>
            <p>
              Aging often comes with increased medication use as the body
              requires more support to remain healthy and strong. However, this
              does not always go hand-in-hand with cognitive changes that are
              happening simultaneously.
            </p>
            <p>
              Many seniors will require assistance keeping track of daily
              medication requirements. They also may need help scheduling and
              tracking associated doctor appointments and check-ups.
            </p>
            <p>
              Initially, family members may be able to help with medication
              tracking. As medical needs increase, it may be worthwhile to call
              on a professional in-home caretaker to assist with this type of
              regulation.
            </p>
            <h3>Nutrition Assistance</h3>
            <p>
              Healthy nutrition is an integral part of everyone is well-being.
              While the need for nutritious meals does not change for seniors,
              the ability to keep up with cooking typically does.
            </p>
            <p>
              Having family members willing to prepare meals for seniors aging
              in place is a good strategy. If the process becomes too consuming,
              meal delivery services are regularly available to ensure seniors
              enjoy regular and nutritious meals every day of the week.
            </p>
          </div>
        </div>
      ) : (
        <div>
            <h2>I think ...</h2>
            <h3>You are fine.</h3>
            <h3>So you do yoga daily.</h3>
            <h2>Thank You ...</h2>
        </div>
      )}
    </>
  );
};

export default Home;
