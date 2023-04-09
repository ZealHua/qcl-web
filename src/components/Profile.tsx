import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

// 自定义样式
const Banner = styled(Paper)(({ theme }) => ({
  height: '20rem',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
}));

const AvatarContainer = styled(Box)({
  position: 'absolute',
  bottom: '-4rem',
  left: '2rem',
});

const Profile: React.FC = () => {
  // 模拟数据
  const experience = [
    {
      position: '软件工程师',
      company: 'XYZ公司',
      duration: '2020-2023',
    },
    {
      position: '实习生',
      company: 'ABC公司',
      duration: '2019-2020',
    },
  ];

  const education = [
    {
      school: 'ABC大学',
      degree: '本科',
      major: '计算机科学',
      duration: '2016-2020',
    },
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'Python'];

  return (
    <>
      <Banner />
      <AvatarContainer>
        {/* 这里可以放置一个Avatar组件显示用户头像 */}
        <Typography variant="h4">姓名</Typography>
        <Typography variant="subtitle1">职位</Typography>
      </AvatarContainer>
      <Box mt={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="经历" />
              <CardContent>
                {experience.map((exp, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6">{exp.position}</Typography>
                    <Typography variant="subtitle1">{exp.company}</Typography>
                    <Typography variant="subtitle2">{exp.duration}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="教育" />
              <CardContent>
                {education.map((edu, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6">{edu.school}</Typography>
                    <Typography variant="subtitle1">
                      {edu.degree}，{edu.major}
                    </Typography>
                    <Typography variant="subtitle2">{edu.duration}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="技能与认可" />
              <CardContent>
                {skills.map((skill, index) => (
                  <Chip key={index} label={skill} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                ))}
              </CardContent>
            </Card>
          </Grid>
          {/* 你可以继续添加其他部分，如推荐信、项目等 */}
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
