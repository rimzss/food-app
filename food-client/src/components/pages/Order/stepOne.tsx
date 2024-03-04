"use client";
import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TextField from "@mui/material/TextField";
import { DefaultInput } from "@/components";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
type Props = {};

const StepOne = (props: Props) => {
  const duureg = [
    "Баянзүрх дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Хан-Уул дүүрэг",
    "Чингэлтэй дүүрэг",
  ];
  const horoo = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо",
    "4-р хороо",
    "5-р хороо",
    "6-р хороо",
  ];
  const bair = [
    "Нархан хотхон",
    "Хоймор хотхон",
    "Зайсан хотхон",
    "26-р байр",
    "45-р байр",
  ];
  return (
    <Box sx={{ minWidth: 370, width: { md: "50%" } }}>
      <Box sx={{ display: "flex" }}>
        <Radio color="secondary" checked={true} />
        <Box>
          <Typography variant="caption" color="GrayText">
            Алхам 1
          </Typography>
          <Typography variant="h6">Хаягийн мэдээлэл оруулах</Typography>
          <Typography variant="body2" color="Highlight">
            Хүлээгдэж байна
          </Typography>
        </Box>
      </Box>
      <Box my={10} boxShadow={3} gap={10} p={5} borderRadius={2}>
        <Typography variant="subtitle2" fontWeight={600}>
          Хаяг аа оруулна уу
        </Typography>
        <Stack spacing={4}>
          <Select sx={{ bgcolor: "#ECEDF0" }} displayEmpty>
            <MenuItem sx={{ backgroundColor: "#18BA51" }}>
              <em>
                <PlaceOutlinedIcon />
                Дүүрэг сонгоно уу
              </em>
            </MenuItem>
            {duureg.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
          <Select sx={{ bgcolor: "#ECEDF0" }} displayEmpty>
            <MenuItem sx={{ backgroundColor: "#18BA51" }}>
              <em>
                <PlaceOutlinedIcon />
                Хороо сонгоно уу
              </em>
            </MenuItem>
            {horoo.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
          <Select sx={{ bgcolor: "#ECEDF0" }} displayEmpty>
            <MenuItem sx={{ backgroundColor: "#18BA51" }}>
              <em>
                <PlaceOutlinedIcon />
                Байр гудамж сонгоно уу
              </em>
            </MenuItem>
            {bair.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack spacing={7} marginTop={10}>
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Нэмэлт мэдээлэл
              <TextField
                sx={{ bgcolor: "#ECEDF0", width: "100%" }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Орц, давхар, орцны код..."
              />
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Утасны дугаар
            </Typography>
            <DefaultInput placeholder="Утасны дугаараа оруулна уу" />
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Төлбөр төлөх
            </Typography>
            <div>
              <FormControlLabel
                value="Qpay"
                control={<Checkbox />}
                checked={true}
                label="Qpay"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Card"
                control={<Checkbox />}
                label="Картаар"
                labelPlacement="end"
                checked={!false}
              />
            </div>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default StepOne;
