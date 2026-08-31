# けものっち!

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: けものっち!
aliases:
- けものっち
- ケモノッチ！
formalModelName: ケモノッチ！
manufacturer: サミー
releaseDate: 2007-05（サミー公式年別製品一覧・複数後年DBで月一致。2007-05-22のケータイWatch記事は「実機導入に先がけて」アプリ配信と明記するため、5/22以前の実導入日は採用しない。日単位の全国導入日は今回未確定）
generation: 5号機初期
systemType: ノーマル/ボーナス主体 + 演出用プチRT（特殊リプレイ後） / 完全告知 / 同時成立あり

## 性能コア

payoutRateBySetting:
- HAZUSE調べ: 設定1 97.8% / 設定2 100.1% / 設定3 102.9% / 設定4 105.6% / 設定5 108.2% / 設定6 110.5%

confidence: ANALYSIS_HIGH

note:
- 後年の獣王シリーズ整理には設定1 97.9%〜設定6 109.4%等の別値もあるため、現時点ではHAZUSE当時系解析を本線とし、後年値はCONFLICTとして保持する。
- 5号機クロニクルの現行ページには「ボーナス後100/50/30G RT」「無限RT」等の記述があるが、当時HAZUSE・パチマガスロマガ・後年回顧では本機をノーマル主体、特殊リプレイ後の数ゲームのプチRT/チャンスタイムとしている。後者を優先し、5号機クロニクルのRT詳細は誤混入疑いとして性能本線に採用しない。

initialHitBySetting:
- BIG: 設定1 1/291 / 設定2 1/286 / 設定3 1/283 / 設定4 1/271 / 設定5 1/255 / 設定6 1/257
- MIDDLE/REG: 設定1 1/508 / 設定2 1/445 / 設定3 1/362 / 設定4 1/326 / 設定5 1/296 / 設定6 1/259
- ボーナス合成: 設定1 1/185 / 設定2 1/174 / 設定3 1/159 / 設定4 1/148 / 設定5 1/137 / 設定6 1/129

confidence: ANALYSIS_HIGH

note:
- HAZUSE、パチマガスロマガ、P-WORLDで同じ設定別確率を確認。

baseGamesPer50:
- UNVERIFIED

note:
- 「けものっち / ケモノッチ / サミー」「50枚 / 1000円 / 1k / ベース / コイン持ち / ゲーム数」を組み替え、HAZUSE、パチマガスロマガ、P-WORLD、当時記事、後年資料を横断。
- パチマガスロマガの1000円プレイ数ページも「現在調査中」。P-WORLD掲示板には50枚当たりゲーム数の話題は残るが比較可能な確定数値は取得できないため、十分再探索後もUNVERIFIED。

netIncrease:
- 特殊リプレイ（マングース図柄）入賞後、数ゲームのリプレイ確率上昇区間/チャンスタイムへ移行することを当時HAZUSEで確認。
- 演出用プチRTであり、出玉増加用RTとして比較可能な純増/GはNONE_CONFIRMED / NOT_APPLICABLE相当。

basicPayout:
- BIG: 345枚超払い出し終了 / 純増約312枚
- MIDDLE BONUS: 105枚超払い出し終了 / 純増約104枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- BIG2種類、MIDDLE BONUS2図柄の計4ボーナス図柄構成。
- 完全告知タイプ。成立契機に全小役との同時成立あり。
- 特殊リプレイ（マングース・リプレイ・リプレイ）後は数ゲーム、リプレイ確率が上昇しボーナス期待を持続させるチャンスタイム。
- 通常時ゲーム数管理型の天井やAT/ARTは確認されない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「けものっち / ケモノッチ / Sammy / サミー」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / マングース / チャンスタイム / ガックン」を組み替え、当時解析・古いDB・後年回顧を横断したが、本機固有の設定変更時処理を明記した高信頼資料は今回確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井・朝一専用ゲーム数モードはNONE_CONFIRMED。
- 据え置き時の特殊リプレイ後プチRT/チャンスタイム状態の残G・内部状態扱いはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで特殊リプレイ後のプチRT状態が維持/消滅するかはUNVERIFIED。
- 電源OFF→ONのみで天井短縮、朝一専用モード、初当たり優遇が発生する根拠はNONE_CONFIRMED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- ゲーム数モード管理型としての公開情報はNONE_CONFIRMED。

stateAfterReset:
- 特殊リプレイ後の数ゲームのリプレイ高確率/チャンスタイムは確認済み。
- 設定変更/据え置き/電源OFF→ON時の同状態処理は十分再探索後もUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の短縮天井、専用モード、初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、ゲーム数挙動等による変更判別は十分再探索後もUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. サミー公式 — 2007年パチスロ製品一覧
   - https://www.sammy.co.jp/japanese/products/pachislot/2007/index.html
   - 2007年製品として「けものっち!」を確認。
   - reliability: OFFICIAL
2. HAZUSE — けものっち！ 機種情報
   - https://hazuse.com/machine/pachislot/6S1282/
   - 設定別BIG/MIDDLE/合成、機械割、配当表、特殊リプレイ後リプレイ確率上昇、完全告知。
   - reliability: ANALYSIS_HIGH
3. HAZUSE 当時携帯版 — けものっち! 解析・機種情報
   - https://hazuse.com/i/data/kemono/top.htm
   - 5号機、完全告知、特殊リプレイ後数ゲームのリプレイ確率上昇チャンスタイム。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/105/a.php
   - 5号機/5ライン、BIG約312枚、MB約104枚。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/105/h.php
   - HAZUSE/P-WORLDと一致する設定別BIG/MB/合成。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役/1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/105/c.php
   - 1000円プレイ数は「現在調査中」。
   - reliability: ANALYSIS_HIGH
7. P-WORLD — けものっち!
   - https://www.p-world.co.jp/machine/database/4698
   - 型式名「ケモノッチ！」、設定別BIG/MB/合成、完全告知/マングースチャンス。
   - reliability: INDUSTRY_DB
8. ケータイWatch — 2007-05-22「けものっち！」アプリ先行配信
   - https://k-tai.watch.impress.co.jp/cda/news/2007/05/22/34611.html
   - 2007-05-22時点で「パチスロ実機導入に先がけて」と明記。5/22以前の実導入日否定材料。
   - reliability: INDUSTRY
9. なな徹 — 獣王シリーズ回顧
   - https://nana-press.com/post/1623897
   - 2007年「けものっち」はノーマルタイプ、演出用以外のRTなし、特殊リプレイ後プチRTとの回顧。
   - reliability: ANALYSIS_SINGLE
10. 5号機クロニクル — サミー5号機一覧
   - https://5goki.com/sammy
   - 2007/5掲載。ただし本機欄のボーナス後RT/無限RT記述は当時系資料と整合せず、性能本線には採用しない。
   - reliability: CONFLICT

## missingFields

- 日単位の全国納品/ホール導入日
- 50枚あたりゲーム数/1000円ベース
- 設定変更/据え置き/電源OFF→ON時の特殊リプレイ後プチRT状態処理
- 本機固有の設定変更判別

## conflicts

- 機械割: HAZUSE 97.8 / 100.1 / 102.9 / 105.6 / 108.2 / 110.5%に対し、後年獣王シリーズ整理資料では設定1 97.9%〜設定6 109.4%等の別値。平均しない。
- RT仕様: 当時HAZUSE・パチマガスロマガ・後年回顧は「特殊リプレイ後の数ゲームのプチRT/チャンスタイム」を支持。一方、5号機クロニクル現行ページはボーナス後100/50/30G RT・無限RTを記載するためCONFLICT。複数当時系資料を優先し、後者は誤混入疑いとして本線不採用。
- 導入日: 一部後年/個人資料に5/21導入表記がある一方、2007-05-22ケータイWatchは実機導入前と明記。よって日単位導入は確定せず2007-05のみ保存。

## QA note

- 性能コアは設定別ボーナス、機械割、獲得枚数まで複数系統で取得。50枚ベースのみ十分再探索後も未確認のためPARTIAL。
- resetBehaviorはゲーム数天井・朝一専用モード等はNONE_CONFIRMED、有利区間はNOT_APPLICABLE。演出用プチRTの変更/据え置き/電断処理とガックン判別のみUNVERIFIED。
