# スーパーキューティーハニー

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: スーパーキューティーハニー
aliases:
- スーパーキューティハニー
- スーパーキューティーハニー3
- スーパーキューティハーニー
manufacturer: エレコ / ユニバーサル系
releaseDate: 2007-06-25（ALL7.jp導入予定を時系列本線。ユニバーサル公式・後年資料は2007年6月）
generation: 5号機初期
systemType: ボーナス + RT

## 性能コア

payoutRateBySetting:
- 設定1: 98.3%
- 設定4: 101.5%
- 設定6: 106.8%

confidence: ANALYSIS_HIGH

note:
- pacnkの設定別整理と5号機クロニクルで数値一致。
- 5号機クロニクルは本機のゲーム性分類と獲得枚数記述に公式との不整合があるため、機械割一致の照合用途に限定し、システム/獲得枚数の本線根拠には使用しない。

initialHitBySetting:
- BIG合算: 設定1 1/474.90 / 設定4 1/442.80 / 設定6 1/394.80

confidence: ANALYSIS_SINGLE

note:
- 設定1/4/6の3段階設定はパチマガスロマガ基本ページでも確認。
- BIG合算精密値はpacnk後年整理。別系統で精密値を再取得できなかったためANALYSIS_SINGLEを維持。

baseGamesPer50:
- 設定1: 36.7G / 1000円（50枚）
- 設定4: 37.1G / 1000円（50枚）
- 設定6: 37.6G / 1000円（50枚）

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガ通常時小役ページの直接掲載値。

netIncrease:
- BIG後RT「キューティーゲーム」: 約+0.5枚/G

confidence: OFFICIAL

basicPayout:
- BIG: 465枚を超える払い出しで終了
- ユニバーサル公式: 約327枚獲得
- パチマガスロマガ: 純増約300枚

confidence: CONFLICT

note:
- 終了条件465枚超は公式・パチマガで一致。
- 実獲得目安は公式約327枚、パチマガ約300枚で差があるため平均せず双方保持。本線の製品公称値は公式約327枚。

modeSpecificMinimumData:
- BIG後にRT「キューティーゲーム」へ突入。
- RTはチェリー出現またはBIG当選まで継続し、最大999G。
- RT純増は公式約0.5枚/G。
- 天井機能は非搭載と後年解析で確認。
- 設定は1/4/6の3段階。
- P-WORLD型式名: スーパーキューティーハニー3。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 通常時ゲーム数天井、ゲーム数管理モード、AT/ART/CZは確認されないため、設定変更専用の天井短縮・朝一ゲーム数モード恩恵はNOT_APPLICABLE / NONE_CONFIRMED。
- BIG後RT「キューティーゲーム」中の設定変更でRT残状態がどう処理されるか、本機固有資料では確定できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井/ゲーム数管理モードはNOT_APPLICABLE。
- 前日RT中の据え置き時にRT状態・残継続条件をそのまま保持するかは、機種名・型式名・シリーズ名と「据え置き/朝一/RT」を組み替えて再探索したがUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで前日RT状態が維持されるか、本機固有の公開資料を確認できずUNVERIFIED。
- 通常時ゲーム数天井/モードについてはNOT_APPLICABLE。

gameCounterReset:
- 通常時天井なし。NOT_APPLICABLE。

ceilingAfterReset:
- 天井機能非搭載。NOT_APPLICABLE。

modeAfterReset:
- 通常時ゲーム数管理モード、朝一専用モードはNONE_CONFIRMED / NOT_APPLICABLE。

stateAfterReset:
- RT状態の設定変更/据え置き/電断時処理はUNVERIFIED。
- 通常時の別途公開された高低状態再抽選等はNONE_CONFIRMED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一モード、朝一当選率/CZ優遇など比較可能な公開恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要な不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、リール初動、表示、ゲーム数挙動による設定変更/据え置き判別は、「スーパーキューティーハニー / スーパーキューティーハニー3 / エレコ / キューティーハニー」と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を組み替えて再探索後もUNVERIFIED。

numericResetData:
- 短縮天井: NOT_APPLICABLE
- 設定変更時モード振り分け/朝一当選率/リセット恩恵発生率: 比較可能な公開数値は今回未確認

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — スーパーキューティーハニー
   - https://www.universal-777.com/product/slot/super_cutiehoney/
   - エレコ、5号機、ボーナス+RT、発売2007年6月、BIG約327枚（465枚超払い出し終了）、BIG後RT約+0.5枚/G、チェリー出現またはBIG当選まで・最大999G。
   - reliability: OFFICIAL
2. ALL7.jp — 2007年6月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/06
   - スーパーキューティーハニー、エレコ、導入予定2007-06-25。
   - reliability: INDUSTRY_DB
3. P-WORLD — スーパーキューティーハニー
   - https://www.p-world.co.jp/machine/database/4798
   - 型式名スーパーキューティーハニー3、BIG327枚、RT最大999G。
   - reliability: INDUSTRY_DB
4. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/70/a.php
   - 同時成立あり/RT、設定3段階、BIG後RT最大999G、465枚超払い出し終了、純増約300枚。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/70/c.php
   - 1000円あたり設定1 36.7G / 設定4 37.1G / 設定6 37.6G、RT中リプレイ1/1.32。
   - reliability: ANALYSIS_HIGH
6. pacnk — スーパーキューティーハニー設定判別整理
   - https://pacnk.com/slot/tools/sh_superqthani.html
   - 設定1/4/6、BIG合算1/474.90 / 1/442.80 / 1/394.80、PAYOUT98.30 / 101.50 / 106.80%、天井非搭載。
   - reliability: ANALYSIS_SINGLE
7. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 機械割98.3 / 101.5 / 106.8%、2007年6月導入は他資料と一致。ただし「A+ART」「BIG約208枚」「ハニータイム50G」等はユニバーサル公式の本機仕様と不整合のため、その部分は採用しない。
   - reliability: CONFLICT_SOURCE

## missingFields

- 赤7/青7等BIG種類別の設定別精密確率（比較に必要な場合のみ）
- 設定変更/据え置き/電源OFF→ON時のRT状態処理
- 本機固有のガックン/変更判別
- 公開朝一専用数値

## conflicts

- BIG実獲得目安: ユニバーサル公式約327枚に対し、パチマガスロマガは純増約300枚。払い出し終了条件465枚超は一致。平均せず双方保持し、製品公称値は公式を優先。
- 5号機クロニクルは本機をA+ART・BIG約208枚等と記述するが、公式/P-WORLD/パチマガの「ボーナス+RT・BIG約327枚/約300枚・最大999G RT」と整合しない。同サイトのゲーム性/獲得枚数部分は別機種情報混入の疑いがあるため本線採用しない。機械割一致の照合用途のみ使用。
