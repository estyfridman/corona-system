
const data = {
    members: [
        {
            "first_name": "George",
            "last_name": "Washington",
            "id_number": 123333332,
            "email": "Washington@gmail.com",
            "city": "Mount Vernon",
            "street": "3200 Mount Vernon Memorial Highway",
            "house_number": "13",
            "birth_date": "1732-02-22",
            "phone_number": "703-780-2000",
            "mobile_number": "703-780-8364",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/220px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
        },
        {
            "first_name": "John",
            "last_name": "Adams",
            "id_number": "037463722",
            "email": "Adams@gmail.com",
            "city": "Quincy",
            "street": "Adams National Historical Park",
            "house_number": "2",
            "birth_date": "1735-10-30",
            "phone_number": "617-770-1175",
            "mobile_number": "200-770-2345",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gilbert_Stuart_John_Adams.jpg/220px-Gilbert_Stuart_John_Adams.jpg"
        },
        {
            "first_name": "William",
            "last_name": "Harrison",
            "id_number": 300222654,
            "email": "Harrison@gmail.com",
            "city": "North Bend",
            "street": "North Bend, Ohio",
            "house_number": "6B",
            "birth_date": "1773-02-09",
            "phone_number": "404-711-9806",
            "mobile_number": "411-244-0300",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/William_Henry_Harrison_%281845_Daguerreotype%29.jpg/220px-William_Henry_Harrison_%281845_Daguerreotype%29.jpg"
        },
        {
            "first_name": "Abraham",
            "last_name": "Lincoln",
            "id_number": 444444444,
            "email": "Lincoln@gmail.com",
            "city": "Springfield",
            "street": "Lincoln Home National Historic Site",
            "house_number": " ",
            "birth_date": "1809-02-12",
            "phone_number": "217-492-4241",
            "mobile_number": " ",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg/220px-Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg"
          },
          {
            "first_name": "Andrew",
            "last_name": "Johnson",
            "id_number": 555555555,
            "email": "Johnson@gmail.com",
            "city": "Greenville",
            "street": "Greenville, Tennessee",
            "house_number": " ",
            "birth_date": "1808-12-29",
            "phone_number": "0377446665",
            "mobile_number": " ",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Andrew_Johnson_photo_portrait_head_and_shoulders.jpg/220px-Andrew_Johnson_photo_portrait_head_and_shoulders.jpg"
          },
          {
            "first_name": "John",
            "last_name": "Kennedy",
            "id_number": 666666666,
            "email": "Kennedy@gmail.com",
            "city": "Brookline",
            "street": "Kennedy Birthplace",
            "house_number": "25",
            "birth_date": "1917-05-29",
            "phone_number": "0388776665",
            "mobile_number": "0388776665",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/John_F._Kennedy_Presidential_Library_official_portrait.jpg/220px-John_F._Kennedy_Presidential_Library_official_portrait.jpg"
          },
          {
            "first_name": "George",
            "last_name": "Bush",
            "id_number": 700364553,
            "email": "Bush@gmail.com",
            "city": "Kennebunkport",
            "street": "Walker's Point",
            "house_number": "2",
            "birth_date": "1924-06-12",
            "phone_number": "0577448883",
            "mobile_number": "8487665533",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/George_H._W._Bush_presidential_portrait.jpg/220px-George_H._W._Bush_presidential_portrait.jpg"
          },
          {
            "first_name": "Barack",
            "last_name": "Obama",
            "id_number": 800888654,
            "email": "Obama@gmail.com",
            "city": "Honolulu",
            "street": "Honolulu, Hawaii",
            "house_number": "7A",
            "birth_date": "1961-08-04",
            "phone_number": "0488997665",
            "mobile_number": "0488997665",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/220px-Official_portrait_of_Barack_Obama.jpg"
          }
    ],
    corona_Details: [
        {
            "id_number": "123333332",
            "vaccinations": [
              {
                "date_of_vaccination": "2023-01-01",
                "manufacturer": "Pfizer"
              },
              {
                "date_of_vaccination": "2023-02-01",
                "manufacturer": "Moderna"
              }
            ],
            "positive_corona": "2022-12-15",
            "date_of_recovery": "2023-01-10"
          },
          {
            "id_number": "037463722",
            "vaccinations": [],
            "positive_corona": "2023-03-20",
            "date_of_recovery": "2023-04-05"
          },
          {
            "id_number": "300222654",
            "vaccinations": [
              {
                "date_of_vaccination": "2022-01-01",
                "manufacturer": "Moderna"
              },
              {
                "date_of_vaccination": "2022-02-01",
                "manufacturer": "Moderna"
              },
              {
                "date_of_vaccination": "2022-03-01",
                "manufacturer": "Moderna"
              }
            ],
            "positive_corona": "2022-12-15",
            "date_of_recovery": "2023-01-10"
          },
          {
            "id_number": "444444444",
            "vaccinations": [ ],
            "positive_corona": "2021-12-15",
            "date_of_recovery": ""
          },
          {
            "id_number": "555555555",
            "vaccinations": [
              {
                "date_of_vaccination": "2021-01-01",
                "manufacturer": "Pfizer"
              },
              {
                "date_of_vaccination": "2021-02-01",
                "manufacturer": "Pfizer"
              },
              {
                "date_of_vaccination": "2021-03-01",
                "manufacturer": "Pfizer"
              },
              {
                "date_of_vaccination": "2022-02-07",
                "manufacturer": "Pfizer"
              }
            ],
            "positive_corona": "2022-12-15",
            "date_of_recovery": "2023-01-10"
          },
          {
            "id_number": "666666666",
            "vaccinations": [
              {
                "date_of_vaccination": "2021-01-01",
                "manufacturer": "Pfizer"
              },
              {
                "date_of_vaccination": "2022-02-01",
                "manufacturer": "Moderna"
              },
              {
                "date_of_vaccination": "2022-04-01",
                "manufacturer": "Moderna"
              },
              {
                "date_of_vaccination": "2023-01-01",
                "manufacturer": "Moderna"
              }
            ],
            "positive_corona": "2021-12-15",
            "date_of_recovery": "2022-01-01"
          },
          {
            "id_number": "700364553",
            "vaccinations": [ ],
            "positive_corona": "2020-02-15",
            "date_of_recovery": "2020-04-04"
          },
          {
            "id_number": "800888654",
            "vaccinations": [
              {
                "date_of_vaccination": "2021-01-01",
                "manufacturer": "Moderna"
              },
              {
                "date_of_vaccination": "2021-02-01",
                "manufacturer": "Moderna"
              }
            ],
            "positive_corona": "2020-12-15",
            "date_of_recovery": "2020-02-10"
          },
    ],
};

export default data;