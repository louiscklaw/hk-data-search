let test_json = {
  "centaline-centanetod-ccipropertyinfo": {
    "help": "https://data.gov.hk/tc-data/api/3/action/help_show?name=package_show",
    "success": true,
    "result": {
      "resources": [ {
          "shared_id": "359624344d5311e9ac49005056896ca6",
          "description": "此CSV提供CCI成份屋苑的物業資料包括其屋苑設施, 發展商, 入伙年份及總座數",
        },
        {
          "shared_id": "359624344d5311e9ac49005056896ca6",
          "description": "此CSV提供CCI成份屋苑的物業資料包括其屋苑設施, 發展商, 入伙年份及總座數",
        }
      ],
    },
    "revision_id": "bb8ab3fe-ccd1-4635-b36d-3e7abfd2175a"
  },
  "centaline-centanetod-1111111": {
    "help": "https://data.gov.hk/tc-data/api/3/action/help_show?name=package_show",
    "success": true,
    "result": {
      "resources": [ {
          "shared_id": "359624344d5311e9ac49005056896ca6",
          "description": "此CSV提供成份屋苑的物業資料包括其屋苑設施, 發展商, 入伙年份及總座數",
        },
        {
          "shared_id": "359624344d5311e9ac49005056896ca6",
          "description": "此CSV提供成份屋苑的物業資料包括其屋苑設施, 發展商, 入伙年份及總座數",
        }
      ],
    },
    "revision_id": "bb8ab3fe-ccd1-4635-b36d-1111111"
  }
}

console.log(
  Object.entries(test_json)
    .filter( (x) => { return x[1].revision_id.search('bb8ab3fe') > -1 })
    .map(x => x[0])
)
