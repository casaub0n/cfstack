import React from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ContentText } from './ContentText';

type T = typeof ContentText;
type Story = ComponentStoryObj<T>

export default {
  component: () => <ContentText>Help!</ContentText>
} as ComponentMeta<T>

export const Default: Story = {
  storyName: "テキスト"
};
