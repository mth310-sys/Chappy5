# 茉莉花の剣

machineName: 茉莉花の剣
manufacturer: ネット（NET）
releaseDate: 2010-09-27
releaseDateStatus: EXACT_DAY_MULTI_SOURCE_CONFIRMED
releaseDateNote: K-Naviがホール導入開始2010年9月27日を明記。Pachinko Vistaも2010年9月導入開始として整合する。
generation: 5号機
systemType: A+ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、511「沖楽」を再取得。
- 開始時正本地点は recordCount 511 / chronologicalFrontier 2010-09-21。
- 9/21同日群と9/22以降の境界を再監査し、K-Naviで2010-09-27導入を確認した本機をrepo検索。未登録のため512件目として追加。
- 具体日不明の月粒度機は日付順を推測しない方針を維持。

## payoutRateBySetting

- 設定1: **96.5%**
- 設定2: **98.0%**
- 設定3: **100.0%**
- 設定4: **102.5%**
- 設定5: **105.0%**
- 設定6: **110.0%**

Pachinko Vistaの設定別表と、当時機種資料をまとめた2010年業界資料で一致。5号機クロニクルは設定6欄欠落に加え、ART名・セット仕様などK-Naviと整合しない記述が混在するため、性能主値の補強には限定利用する。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/378**
- 設定2: **1/381**
- 設定3: **1/376**
- 設定4: **1/378**
- 設定5: **1/374**
- 設定6: **1/376**

### REG
- 設定1: **1/420**
- 設定2: **1/412**
- 設定3: **1/404**
- 設定4: **1/397**
- 設定5: **1/387**
- 設定6: **1/378**

### ボーナス合算
- 設定1: **1/199**
- 設定2: **1/197**
- 設定3: **1/195**
- 設定4: **1/193**
- 設定5: **1/190**
- 設定6: **1/188**

### ボーナス+ART合成（K-Navi公開値）
- 設定1: **1/101**
- 設定6: **1/80**
- 設定2〜5: **未発表**

confidence: ANALYSIS_MULTI_SOURCE_HIGH_FOR_BONUS / ANALYSIS_HIGH_FOR_KNAVI_COMBINED_ENDPOINTS

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「50枚」「1000円」「ベース」「コイン持ち」「通常時小役」へ検索語を変え、K-Navi、Pachinko Vista、回顧DB、当時資料を再探索したが、比較可能な直接値を安全に確定できなかった。小役確率から逆算しない。
confidence: UNVERIFIED

## netIncrease

ART「試練の刻」: **約+1.3枚/G**

K-Naviが直接明記。セット数とゲーム数のダブル上乗せを採用。
confidence: ANALYSIS_HIGH

## basicPayout

- BIG: **約204枚**
- REG: **約48枚**

Pachinko Vista/回顧資料で確認。
confidence: ANALYSIS_MEDIUM_HIGH

## modeSpecificMinimumData

- ART「試練の刻」はゲーム数・セット数の双方を上乗せするA+ART機。
- 通常時には**20G固定のチャンスゾーン**があり、2択正解ごとにARTを高確率抽選することをK-Naviで確認。
- 通常ゲーム、CZ、ボーナス、ART中からART突入契機を持つ。
- 天井: **ボーナス＆ART間889G**。到達後、前兆を経てARTへ突入するとPachinko Vistaが明記。
- K-Naviの攻略索引にも「天井機能」「設定変更後の挙動」の専用解析項目が存在することを確認。ただし設定変更詳細ページ本文は現存取得経路で回収できなかった。
confidence: ANALYSIS_MULTI_SOURCE_HIGH_FOR_CORE / ANALYSIS_HIGH_FOR_889G_CEILING

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / DETAILED_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」解析項目が存在したことは確認できるが、詳細本文を現存取得経路から回収できず。889G天井カウンタ、CZ進行、ARTストック/潜伏、内部状態が設定変更でclear/retainされるかは推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の889G天井進捗、CZ周期/内部状態、ART権利・ストックの持越しを本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の889G進捗、CZ/ART/内部状態の保持・初期化を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はボーナス＆ART間889Gと確認できるが、設定変更時clear/retainは直接根拠未回収。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井/再抽選値は確認できない。通常時天井889Gをリセット専用値として流用しない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時CZ/ART抽選状態に関する設定変更専用振り分けを確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック・潜伏・CZ関連状態の消去/保持は直接根拠未回収。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、CZ/ART付与、高確スタート等の数値付き恩恵は確定できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。889G進捗が消えるか自体が未確定のため、朝一不利として断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ステージ/CZ状態等を用いる本機固有の変更判別条件・確率を確定できず。

numericResetData:
- normalCeiling: **889G（ボーナス＆ART間）**
- resetDedicatedCeiling: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESET_BEHAVIOR_SOURCE_INDEX_CONFIRMED_DETAIL_PAGE_UNRECOVERED / MAJOR_FIELDS_UNVERIFIED_AFTER_RESEARCH

## conflicts

- 5号機クロニクルの茉莉花の剣欄は、ART名を「茉莉花タイム」、1セット50G・純増約1.2枚/G、上乗せ特化ゾーン「秀麗乱舞」と記載する一方、K-Navi当時ページはART名「試練の刻」、純増約1.3枚/G、20G固定CZを明記する。後年DB側に別仕様混入の可能性があるため、ARTコアはK-Naviを主値とし、競合部分は採用しない。
- 天井について、K-Naviユーザー実戦ログに884G付近のART突入例があるが、これは天井直前の自力当選の可能性が本人記述でも残る。天井値は解析表で明記される889Gを主値とする。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChange時の889Gカウンタ/CZ/ART状態処理: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「茉莉花の剣」 — 2010-09-27導入、ボーナス+ART合成、ART「試練の刻」約+1.3枚/G、20G固定CZ、天井/設定変更専用解析索引
   - https://p-kn.com/slot/1269/
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
2. Pachinko Vista「茉莉花の剣」 — 設定別BIG/REG/合算/機械割、天井=ボーナス＆ART間889G、2010年9月導入
   - https://www.pachinkovista.com/pfactory/model.php?nid=18328
   - confidence: ANALYSIS_HIGH
3. 2010年業界資料アーカイブ — BIG 1/378〜1/376、REG 1/420〜1/378、合成1/199〜1/188、出率96.5〜110.0%、設定4段階表記注記を含む
   - https://paperzz.com/doc/5546047/2010
   - confidence: INDUSTRY_ARCHIVE_MEDIUM_HIGH
4. 5号機クロニクル「ネット」一覧 — 導入月、機械割設定1〜5、基本ボーナス獲得枚数の参考。ただしART詳細にK-Naviとの重大な不整合があるため競合箇所は不採用
   - https://5goki.com/net
   - confidence: RETROSPECTIVE_PARTIAL_WITH_CONTAMINATION_RISK

## sourceResearchNote

- resetBehavior: 「茉莉花の剣 設定変更」「設定変更後の挙動」「リセット」「朝一」「据え置き」「電源OFF ON」「889G」「天井」「ガックン」を組み替え、K-Navi専用項目、Pachinko Vista、回顧DB、当時資料を横断。K-Navi詳細ページURLの存在までは追跡できたが本文取得はキャッシュ欠損で不可。
- 性能コア: K-Navi、Pachinko Vista、2010年業界資料を優先。後年回顧DBのART詳細は不整合のため主値に混ぜない。
- ベース/型式/検定: 専用検索を行ったが高信頼の直接値を確定できず、推測で補完しない。
