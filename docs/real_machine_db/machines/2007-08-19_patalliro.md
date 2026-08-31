# パタリロ!

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: パタリロ!
manufacturer: アビリット（旧高砂系 / 現コナミアミューズメント系）
releaseDate: 2007-08-19
generation: 5号機
systemType: ボーナス+RT

## releaseDate evidence

- 2007-07-13付グリーンべるとは「納品は8月19日から」と明記。
- ALL7.jpは導入予定2007-08-20。
- パチビーも2007-08-20導入機種として掲載。
- P-WORLDは導入開始2007年08月。

時系列本線は当時業界一次系の「納品開始 2007-08-19」を採用し、一般ホール導入予定2007-08-20を併記する。

信頼度: INDUSTRY

## payoutRateBySetting

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 100.6% |
| 5 | 103.5% |
| 6 | 107.1% |

K-Naviは設定別確率/機械割を「未発表」としているため、当時公開値そのものではなく後年整理値として扱う。

信頼度: ANALYSIS_SINGLE / RETROSPECTIVE

## initialHitBySetting

5号機クロニクル掲載値:

### BIG

| 設定 | 確率 |
|---|---:|
| 1 | 1/338 |
| 2 | 1/315 |
| 5 | 1/295 |
| 6 | 1/278 |

### REG / バンコランボーナス

| 設定 | 確率 |
|---|---:|
| 1 | 1/936 |
| 2 | 1/936 |
| 5 | 1/936 |
| 6 | 1/936 |

### 合成

| 設定 | 確率 |
|---|---:|
| 1 | 1/248 |
| 2 | 1/236 |
| 5 | 1/224 |
| 6 | 1/214 |

K-Naviは設定別BIG/REGを未発表としているため、精密な当時解析値の別系統照合は今回未取得。

信頼度: ANALYSIS_SINGLE / RETROSPECTIVE

## baseGamesPer50

UNVERIFIED。

`パタリロ / パタリロ! / アビリット / 高砂` と `1000円 / 50枚 / ベース / コイン持ち / 小役確率` を組み替え、P-WORLD、K-Navi、パチマガスロマガ、5号機クロニクル、当時業界記事、旧個人攻略資料まで再探索したが、比較可能な設定別50枚ベースを確定できなかった。

## netIncrease

RT「パタリロタイム」搭載は複数資料で一致。

- 最大1000G継続。
- パチマガスロマガは平均100〜150G継続と整理。
- 特殊リプレイ成立で1000G RTが終了し、その特殊リプレイがボーナス非同時成立なら30G RTへ移行する仕様を当時業界記事で確認。
- RTの1Gあたり純増枚数は今回、公式/当時解析/旧DBを再探索しても高信頼値を確定できずUNVERIFIED。

信頼度: INDUSTRY / ANALYSIS_HIGH（RT構造）; UNVERIFIED（純増/G）

## basicPayout

- BIG: 351枚超払い出し終了、実獲得目安約240枚。
- バンコランボーナス（REG/CB表記あり）: 129枚超払い出し終了、実獲得目安約111枚。

グリーンべるとはBB平均純増240枚、RB最大純増111枚。パチマガスロマガもBIG約240枚、CB約111枚で整合。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- BIG後はRT「パタリロタイム」へ突入。
- 最大1000G。
- 特殊リプレイ成立が1000G RTの終了契機。特殊リプレイがボーナス非同時成立なら30G RTへ移行。
- パチマガスロマガはRT平均継続100〜150Gと記載。
- 2007年当時の実戦記録ではパタリロボーナス後特殊リプレイ約1/60、クックロビンボーナス後約1/120との記述があるが、個人実戦/二次情報であり物差し本線には採用しない。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `パタリロ / パタリロ! / アビリット / 高砂 / パタリロタイム` と `設定変更 / リセット / 朝一 / RT / 状態 / 天井 / ガックン` を組み替え、P-WORLD、K-Navi、パチマガスロマガ、当時業界記事、5号機クロニクル、旧攻略系/回顧資料を横断。
- 設定変更時にRT状態、RT残りG、特殊リプレイ関連状態をどう扱うか、本機固有の高信頼公開情報は確定できずUNVERIFIED。

carryOverBehavior:
- 据え置き時のRT残りG/内部RT状態の引継ぎについて本機固有の高信頼資料を確定できずUNVERIFIED。
- 通常時のゲーム数天井はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみでRT残りG/内部状態を引き継ぐか、本機固有の公開資料は今回確定できずUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED。
- RTは最大1000Gだが、これはボーナス後RTの継続上限であり通常時天井とは別物。
- 設定変更時のRT残りGリセット/引継ぎはUNVERIFIED。

ceilingAfterReset:
- 通常時天井およびリセット時短縮天井はNONE_CONFIRMED。

modeAfterReset:
- 朝一専用モード、設定変更専用モード、公開モード振り分けはNONE_CONFIRMED。

stateAfterReset:
- RT状態/特殊リプレイ関連状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 朝一RT、短縮天井、設定変更時専用当選率などの主要恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のリールガックン、液晶表示、RT挙動等による設定変更/据え置き判別は、検索語・資料系統を変えて再探索したが高信頼情報を確定できずUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット短縮天井: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 公開朝一数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — 人気ギャグ漫画「パタリロ」がパチスロで登場（2007-07-13）
   - https://web-greenbelt.jp/00004247/
   - アビリット、BB平均純増240枚、RB最大純増111枚、最大1000G RT、特殊リプレイ終了契機、納品8月19日から
   - reliability: INDUSTRY
2. Pマンズ / プレイグラフ転載 — アビリットが新機種「パタリロ」発表（2007-07-10）
   - https://p-mans.blogspot.com/2007/07/
   - クックロビン/パタリロボーナス後パタリロタイム、最大1000G RT
   - reliability: INDUSTRY
3. P-WORLD — パタリロ
   - https://www.p-world.co.jp/machine/database/4841
   - パチスロ、5号機RT、導入2007年08月、BIG最大240枚、バンコラン最大111枚
   - reliability: OLD_DB / INDUSTRY_SUPPORT
4. K-Navi — パタリロ
   - https://p-kn.com/slot/598/
   - 5号機、最大1000G RT、351枚/129枚払い出し終了、設定別BIG/REG/機械割は未発表表記
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — パタリロ! 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/18/a.php
   - 同時成立あり/RT、平均100〜150G、BIG約240枚、CB約111枚
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — コナミアミューズメント（高砂電器・アビリット）5号機全機種一覧
   - https://5goki.com/konami
   - 2007/8、設定1/2/5/6のBIG・REG・合成・機械割
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE
7. ALL7.jp — 2007年8月導入予定一覧
   - https://www.all7.jp/plans/index/2007/08
   - パタリロ! 導入予定2007-08-20
   - reliability: OLD_DB
8. パチビー — 2007年8月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-08
   - 2007-08-20導入機種として掲載
   - reliability: OLD_DB

## missingFields

- 設定別50枚ベース
- RTの1Gあたり純増枚数
- 設定別BIG/REG/機械割の当時独立解析ソース
- 設定変更時RT状態/残G処理
- 据え置き/電源OFF→ON時RT状態/残G処理
- 本機固有の設定変更判別/ガックン

## conflicts

- 導入日: 当時業界記事は納品開始2007-08-19、ALL7/パチビーは一般導入2007-08-20。定義差として両方保持し、時系列本線は納品開始日を採用。
- ボーナス区分名称: グリーンべるとはRB、パチマガスロマガはCB表記。獲得性能約111枚は一致しており、名称差として保持。
