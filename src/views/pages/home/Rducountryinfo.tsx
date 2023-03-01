import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type RDUCountryInfoProps = {
  //
};

const RDUCountryInfo: React.FC<any> = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>ประเทศใช้ยาอย่างสมเหตุผล</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            หมายถึง ประเทศที่มีระบบกลไกให้เกิดการใช้ยาอย่างสมเหตุผล สอดคล้องตามแนวทางขององค์การอนามัยโลก ตั้งแต่ต้นน้าํ
            (ผู้ผลิตยา/บริษัทยา/ หน่วยกำกับ ดูแลด้านยา) กลางนํ้า (สถานบริการสุขภาพทั้งรัฐ เอกชนทุกระดับ/
            ผู้ประกอบวิชาชีพด้านสุขภาพ) และ ปลายน้าํ (ประชาชน ครอบครัว และชุมชน) ประกอบด้วย 3 กลไกหลัก คือ
            การสร้างจิตสำนึกที่ดีและความตระหนักรู้ของบุคคล การบริหารจัดการที่ดี และการกำกับ ดูแลที่มีประสิทธิภาพ
            ทั้งนี้ในกลไกทั้ง 3 ส่วน จะเชื่อมโยงระหว่างกัน เพื่อให้เกิดการพัฒนา และแก้ปัญหาอย่างต่อเนื่อง
            ครอบคลุมทั้งยาแผนปัจจุบันและยาสมุนไพร
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>นโยบายประเทศใช้ยาอย่างสมเหตุผลโดยชุมชนเป็นศูนย์กลาง</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            หมายถึง การมุ่งจัดการระบบยาโดยมีชุมชน เป็นศูนย์กลาง เพื่อให้ประชาชนมีความปลอดภัยในการใช้ยา
            มีคุณภาพชีวิตที่ดีและสามารถ พึ่งตนเองด้านสุขภาพได้โดยสร้างการมีส่วนร่วมของชุมชน หน่วยงานรัฐ และเอกชน ในการ
            ออกแบบระบบสุขภาพชุมชน มีระบบการเฝ้าระวังเพื่อเตือนภัย มีการสร้างความรอบรู้ด้านการ ใช้ยาอย่างสมเหตุผล
            และมีความสามารถในการดูแลตนเองเบื้องต้นเมื่อเจ็บป่วย (เอกสาร สมัชชาสุขภาพแห่งชาติครั้งที่ 12)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>การใช้ยาอย่างสมเหตุผล</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            หมายถึง
            ประชาชนมีความรู้ความเข้าใจในการใช้ยาเพื่อดูแลสุขภาพตนเองเบื้องต้นตามความจาเป็นรวมทั้งได้รับและใช้ยาจากสถานบริการสุขภาพได้อย่างถูกต้องปลอดภัย
            เหมาะสมกับแต่ละบุคคลทั้งในเรื่องโรคขนาดยาวิธีใช้ตามระยะเวลาที่กาหนดโดยเกิดความคุ้มค่าสูงสุด
            ต่อบุคคลและสังคมรวมทั้งลดความเสี่ยงจากยา ผลิตภัณฑ์สุขภาพกลุ่มเสี่ยง
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>การใช้ยาอย่างสมเหตุผลในชุมชน</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            หมายถึง ประชาชนมีความรอบรู้และสามารถใช้ยาอย่างสม
            เหตุผลใช้ยาได้อย่างถูกต้องเหมาะสมปลอดภัยและดูแลสุขภาพตนเองเบื้องต้นได้เมื่อเจ็บป่วย
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography>ความหมายของ ยา</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>หมายถึง ยาและผลิตภัณฑ์สุขภาพที่มีส่วนผสมของยาหรือมุ่งหมายใช้เป็นยา</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography>อำเภอใช้ยาอย่างสมเหตุผล ( RDU district )</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            หมายถึง อำเภอที่มีการออกแบบบริหารจัดการและ
            พัฒนาระบบสุขภาพของชุมชนเพื่อการใช้ยาอย่างสมเหตุผลโดยมีการกำหนดนโยบายและมาตรการ
            ดำเนินการในรูปแบบคณะกรรมการหรือองค์กรระดับอำเภอซึ่งมีองค์ประกอบจากการมีส่วนร่วมจาก
            หลายภาคส่วนทั้งหน่วยงานรัฐภาคเอกชนและตัวแทนภาคประชาชนเช่นกรรมการพชอ ./พชต.เพื่อ
            พัฒนาการใช้ยาอย่างสมเหตุผลในแต่ละอำเภอโดยมีการเชื่อมโยงทั้งสถานบริการสุขภาพทุกระดับสู่
            ชุมชนครอบครัวและบุคคลตลอดจนมีการจัดการความเสี่ยงที่เกิดขึ้นทั้งในระบบบริการสุขภาพทั้งรัฐและ
            เอกชนรวมถึงระบบงานเชิงรุกในชุมชนมีเป้าหมายเพื่อให้ประชาชนปลอดภัยจากการใช้ยาใช้ยาอย่างมี
            ประสิทธิผลคุ้มค่ามีความรอบรู้ในการใช้ยา และการดูแลสุขภาพตนเองเบื้องต้นเมื่อเจ็บป่วย
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography>การประเมินผลการดำเนินงาน</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>หมายถึง ประเมินผลงาน 3 กิจกรรม ประกอบด้วย</Typography>
          <Typography>
            1.การประเมินผลลัพธ์โรงพยาบาลใช้ยาอย่างสมเหตุผล (RDU Hospital)
            โดยประเมินระดับการพัฒนาสู่การเป็นโรงพยาบาลส่งเสริมการใช้ยาอย่างสมเหตุผลคือผลงานผ่านตัวชี้วัดการสั่งใช้ยาตามเกณฑ์อย่างน้อย
            10 ใน 12 ข้อ
          </Typography>
          <Typography>
            2.การประเมินผลลัพธ์โรงพยาบาลส่งเสริมสุขภาพตาบลใช้ยาอย่างสมเหตุผล(RDU PCU) โดยประเมินผลอำเภอมีจำนวนรพ.สต.≥
            ร้อยละ80 ที่มีอัตราการใช้ยาปฏิชีวนะในโรคRespiratory Infection(RI) และAcute Diarrhea(AD) ≤ ร้อยละ20 ทั้ง 2
            กลุ่มโรค
          </Typography>
          <Typography>
            3.การประเมินผลการส่งเสริมการใช้ยาอย่างสมเหตุผลในชุมชน (RDU Community) โดยพัฒนาระบบกลไก
            สนับสนุนและส่งเสริมให้เกิดการใช้ยาอย่างสมเหตุผลในระดับชุมชน
            พัฒนาศักยภาพและสร้างการมีส่วนร่วมของแหล่งกระจายยาภาคเอกชนให้มีส่วนร่วมดาเนินการ (Good Private
            Sector)โดยมีแนวทางดำเนินการระดับอำเภอประกอบด้วย เกณฑ์ประเมินกระบวนการพัฒนาร้านชำในระดับตำบลและอำเภอ
            และเกณฑ์ประเมินสำหรับร้านชำ
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RDUCountryInfo;
