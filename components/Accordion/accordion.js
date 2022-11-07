import { React, useState } from "react"
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import Icon from "../Icon/icon"

const AccordionList = props => {
  const { information } = props
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const infoList = information.map((info, index) => {
    return (
      <Accordion open={open === (index + 1)} icon={<Icon id={(index + 1)} open={open} />} key={index} >
        <AccordionHeader className="border-b-[2px]" onClick={() => handleOpen((index + 1))}>
          <div className="w-3/4 py-2 text-left">
            <h3>{info.title}</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <p className="py-1">
            {info.body}
          </p>
        </AccordionBody>
      </Accordion>
    )
  })

  return (
    <div className="w-full md:max-w-[60%] mx-auto">
      {infoList}
    </div>
  )
}
export default AccordionList