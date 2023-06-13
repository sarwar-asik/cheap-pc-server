/* eslint-disable no-console */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { academicSemesterService } from './academicSemesterServices';
import { AcademicSemester } from './AcademicSemesterModel';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constant/pagination';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    // console.log(academicSemester, 'from controller=================');
    const result = await academicSemesterService.createAcademicSemesterService(
      academicSemester
    );

    if (result) {
      sendResponse(res, {
        success: true,
        message: 'successfully create semester',
        statusCode: 200,
        data: result,
      });
      next();
    }
  }
);

const getAllSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await AcademicSemester.find();

    if (data.length > 0) {
      sendResponse(res, {
        success: true,
        message: 'successfully get semester',
        statusCode: 200,
        data: data,
      });
      // next();
    } else {
      res.status(400).send({ status: false, message: 'Not found data' });
    }
  }
);


const getAllPaginationSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

// const paginationOption={
//   page:Number( req.query.page),
//   limit:Number(req.query.limit),
//   sortBy:req.query.sortBy,
//   sortOrder:req.query.sortOrder,
// }
const paginationOption= pick(req.query,paginationFields)

// 


    const result = await academicSemesterService.GetPaginationSemesterService(paginationOption)

    
        sendResponse(res, {
          success: true,
          message: 'successfully get semester',
          statusCode: 200,
          data: result,
        });
       
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemester,
  getAllPaginationSemester,
};