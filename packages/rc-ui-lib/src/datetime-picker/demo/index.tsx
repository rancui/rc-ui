import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { DatetimePicker, Toast, Field, Popup } from '../..';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <DemoSection>
      <DemoBlock card title="选择年月日">
        <DatetimePicker
          title="选择年月日"
          minDate={new Date(2030, 0, 0, 0, 3)}
          maxDate={new Date(2040, 5, 0, 0, 0)}
          value={new Date(2020, 0, 0, 0, 0)}
          filter={(type: string, values: string[]): string[] => {
            if (type === 'minute') {
              return values.filter((value) => Number(value) % 30 === 0);
            }

            return values;
          }}
          onChange={(value) => console.log(value)}
          onConfirm={(value) => console.log(value)}
        />
        {/* <DatetimePicker
          title="选择年月日"
          type="date"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          onChange={(value) => console.log(value)}
        /> */}
      </DemoBlock>
      {/* <DemoBlock card title="选择年月">
        <DatetimePicker
          type="year-month"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          formatter={(type: string, val: string) => {
            if (type === 'year') {
              return `${val}年`;
            }
            if (type === 'month') {
              return `${val}月`;
            }
            return val;
          }}
          onChange={(value) => console.log(value)}
        />
      </DemoBlock>
      <DemoBlock card title="选择月日">
        <DatetimePicker
          type="month-day"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          formatter={(type: string, val: string) => {
            if (type === 'month') {
              return `${val}月`;
            }
            if (type === 'day') {
              return `${val}日`;
            }
            return val;
          }}
        />
      </DemoBlock>
      <DemoBlock card title="选择时间">
        <DatetimePicker type="time" minHour="10" maxHour="20" value="12:00" />
      </DemoBlock>
      <DemoBlock card title="选择完整时间">
        <DatetimePicker
          type="datetime"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="选择年月日小时">
        <DatetimePicker
          type="datehour"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="选择过滤器">
        <DatetimePicker
          type="time"
          minHour="10"
          maxHour="20"
          value="12:00"
          filter={(type, options) => {
            if (type === 'minute') {
              return options.filter((option) => +option % 5 === 0);
            }
            return options;
          }}
        />
      </DemoBlock>
      <DemoBlock card title="自定义列排序">
        <DatetimePicker
          type="date"
          columnsOrder={['month', 'day', 'year']}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="确认按钮">
        <DatetimePicker
          onConfirm={(value: Date) => Toast(`确认的日期：${value}`)}
          type="date"
          minDate={new Date(2021, 0, 1)}
          maxDate={new Date(2021, 2, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="搭配弹出层使用">
        <Field
          readonly
          clickable
          label="日期"
          value={fieldValue}
          placeholder="选择选择日期"
          onClick={() => setShowPicker(true)}
        />
      </DemoBlock>
      <Popup
        title="请选择日期"
        closeable
        visible={showPicker}
        round
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
        <div style={{ padding: '0 8px' }}>
          <DatetimePicker
            onConfirm={(value: Date) => {
              setFieldValue(value.toISOString());
              setShowPicker(false);
            }}
            type="date"
            filter={(type: string, options) => {
              if (type === 'minute') {
                return options.filter((option) => +option % 5 === 0);
              }
              return options;
            }}
            minDate={new Date(2021, 0, 1)}
            maxDate={new Date(2021, 2, 1)}
            value={new Date()}
          />
        </div>
      </Popup> */}
    </DemoSection>
  );
};
