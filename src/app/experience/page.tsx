import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { title } from "process";

function ExperiencePage() {
  const experiences = [
    {
      title: "manchester metropolitan university",
      location: "manchester, uk",
      date: "oct 2024 - present",
      roles: [
        {
          title:
            "department of computing & mathematics assistant lab demonstrator",

          description: [
            "demonstrated effective communication by breaking down complex software engineering concepts into digestible steps, ensuring student comprehension.",
            "provided one-on-one assistance to students, tailoring explanations to varying levels of technical proficiency.",
            "fostered a supportive learning environment, encouraging collaboration and peer-to-peer learning among students.",
          ],
        },
      ],
    },
    {
      title: "bancosol",
      location: "la paz, bolivia",
      placeDescription:
        "bancosol is a microfinance bank and the first microfinance institution in history, committed to meeting the financial needs of country's micro entrepreneurs and small business owners.",
      date: "jun 2023 – aug 2023",
      roles: [
        {
          title: "data science intern",
          description: [
            "worked in cross-functional teams to develop machine learning models using scikit-learn, meeting deadlines in a dynamic banking environment.",
            "collaborated with professionals specialised in different areas of the data science process to apply crucial learning outcomes to real life scenarios.",
            "analysed large datasets using pandas to extract meaningful insights, improving the accuracy of predictive models and enhancing decision-making processes.",
          ],
        },
        {
          title: "financial risk analyst intern",
          date: "jun 2023 – jul 2023",
          description: [
            "evaluated financial data and identifying risk factors, enabling active problem solving and constant analytical thinking.",
            "enhanced communication skills by translating complex financial data into clear reports for stakeholders.",
            "assisted in the development of risk assessment models, helping to forecast potential financial threats and support strategic decision-making.",
          ],
        },
      ],
    },
    {
      title: "hocicos del mundo",
      location: "la paz, bolivia",
      placeDescription:
        "hocicos del mundo is a dog shelter with over seven years of experience in rescuing and caring for stray dogs until they can find a new family.",
      date: "feb 2021 – oct 2021",
      roles: [
        {
          title: "volunteer",
          description: [
            "collaborated with a team of volunteers to maintain a clean and safe environment for the animals.",
            "adapted to rapidly changing situations, managing behavioural issues or providing immediate care for animals in need.",
            "improved communication skills by coordinating with shelter staff in a fast-paced and busy environment.",
            "fostered a warm and inviting environment for visitors.",
          ],
        },
      ],
    },
    {
      title: "carhartt wip",
      location: "london, uk",
      placeDescription:
        "carhartt wip is the streetwear branch of the american clothing brand founded in 1889.",
      date: "jul 2018 – aug 2018",
      roles: [
        {
          title: "sales floor team member work experience",
          description: [
            "ensure a positive shopping experience for customers, assisting with product selection, resolving complaints and creating a welcoming atmosphere.",
            "managed high customer traffic by collaborating efficiently with colleagues.",
            "demonstrated strong multitasking skills by managing stocking and customer service simultaneously.",
            "adapted to maintain productivity and quality of service under pressure.",
            "contributed to an increase in customer interest and sales by actively supporting customers.",
          ],
        },
      ],
    },
  ];

  return (
    <div className=" min-h-screen w-full py-32 px-6 lg:py-24 lg:px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-16 font-bold text-primary lg:mb-20 underline decoration-wavy decoration-primary/25 decoration-1 decoration underline-offset-4">
          experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="lg:text-3xl  text-lg font-semibold underline">
                      {exp.title}
                    </CardTitle>
                    <p className="lg:text-lg text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="lg:text-lg text-sm">
                    {exp.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {exp.placeDescription && (
                  <p className="lg:text-lg text-sm mb-4">
                    {exp.placeDescription}
                  </p>
                )}

                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="mb-4">
                    <h3 className="font-semibold text-lg lg:text-xl underline">
                      {role.title}
                    </h3>

                    <ul className="list-disc pl-5 space-y-1">
                      {role.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="lg:text-xl text-md">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
