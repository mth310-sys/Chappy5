# まことちゃん

machineName: まことちゃん
manufacturer: ヤーマ
formalModelName: まことちゃんK
approvalNumber: 9S0955
releaseDate: 2010-03-08（ホール導入予定主値。メーカー公式は2010年3月登場、当時記事は3月上旬より順次稼働）
generation: 5号機
systemType: ART主体 + BIG / 周期抽選型ART
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前実レコード「青ドン～花火の匠～」を再取得してから継続。
- 開始時正本はrecordCount 463 / chronologicalFrontier 2010-03-08。LATEST_HANDOFFが2010-03-08同日群の最優先未登録候補として本機を指定。
- repo上の候補パス `docs/real_machine_db/machines/2010-03-08_makotochan.md` が未存在であることを確認してから追加。
- ALL7は2010-03-08導入予定。ベルコ現存公式の旧ヤーマ機種ページは2010年3月登場。2010-01-20のコミックナタリーは「3月上旬より全国ホールにて順次稼働予定」と報道。P-WORLDは導入開始2010年03月までの月精度。時系列主値はALL7の2010-03-08を採用。

## payoutRateBySetting

- 設定1: **96.5%**
- 設定2: **98.5%**
- 設定3: **101.0%**
- 設定4: **103.0%**
- 設定5: **105.0%**
- 設定6: **107.0%**

パチマガスロマガ旧解析と5号機クロニクル、P-WORLD端点で一致。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/1892**
- 設定2: **1/1892**
- 設定3: **1/1892**
- 設定4: **1/1892**
- 設定5: **1/1892**
- 設定6: **1/5461**

### 初当たりART
- 設定1: **1/280**
- 設定2: **1/256**
- 設定3: **1/232**
- 設定4: **1/211**
- 設定5: **1/197**
- 設定6: **1/196**

### BIG + 初当たりART合成
- 設定1: **1/271**
- 設定2: **1/249**
- 設定3: **1/225**
- 設定4: **1/206**
- 設定5: **1/193**
- 設定6: **1/190**

旧パチマガスロマガ直接値。P-WORLDもART主体・BIG低確率という構造を確認。

confidence: ANALYSIS_HIGH_DIRECT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

旧パチマガスロマガの本機専用「1000円あたりのゲーム数」は現存ページ上で「現在調査中」。`まことちゃん / まことちゃんK / ヤーマ` と `50枚 / 1000円 / ベース / コイン持ち` を組み替え、メーカー現存ページ、P-WORLD、旧解析、後年DBまで再探索したが比較可能な定量値を確定できず。推定しない。

confidence: UNVERIFIED

## netIncrease

- ART「よいこコンサート」: **約+2.0枚/G**
- ARTは差枚数管理に近い固定獲得型で、**100枚 or 500枚**獲得まで継続。
- ART終了後は最大7Gの「アンコールタイム」へ移行し、告知成功でART継続。

P-WORLDと旧パチマガスロマガで一致。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約150枚**（規定払い出し224枚）
- ART「よいこコンサート」: **約100枚 or 約500枚**
- ARTループ率: **66% / 80% / 86% / 90%**

BIG終了後はART突入確定。P-WORLDと旧パチマガスロマガで一致。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 出玉増加の主役は押し順ART「よいこコンサート」。
- 通常時は一定周期でART抽選機会が訪れ、P-WORLDは**約72Gに1回**の周期抽選として紹介。
- 通常時は約15Gの前兆演出を経て最終的な7揃いでARTへ突入。
- ARTは100枚/500枚固定獲得型、純増約+2.0枚/G。
- ART終了後は最大7Gのアンコールタイムへ移行し、成功でループ。
- BIGは低確率だが終了後ART確定。
- 通常のゲーム数天井として「○G到達でART確定」と断定できる直接資料は確認できず、P-WORLDの「仮天井」は約72G周期の抽選機会を指すため、通常天井とは分離する。

confidence: ANALYSIS_HIGH_FOR_SYSTEM / ANALYSIS_SINGLE_FOR_72G_PERIOD_LABEL

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`まことちゃん / まことちゃんK / ヤーマ` と `設定変更 / リセット / 朝一 / 周期 / ART / 仮天井` を組み替え、メーカー現存ページ、P-WORLD、旧パチマガスロマガ、後年DB、回顧資料を横断したが、本機固有の設定変更時周期・前兆・ART状態処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に約72G周期の内部進捗や前兆状態を前日から引き継ぐかを直接明記した高信頼資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみで周期進捗・前兆・ART/アンコール状態がどう扱われるか、本機固有資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_PERIODIC_COUNTER**。本機は一般的な固定ゲーム数天井ではなく約72GごとのART抽選周期が主要ゲーム数要素。設定変更/据え置き/電源OFF→ONで周期進捗がリセットされるか引き継ぐかは未確定。

ceilingAfterReset: **NOT_APPLICABLE_AS_FIXED_CEILING / NONE_CONFIRMED_AFTER_RESEARCH**。P-WORLDの「仮天井」は約72G周期抽選を指し、リセット専用短縮天井の公開値は確認なし。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用モード、設定変更時モード再抽選、周期振り分けの公開値を確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。前兆中、ART中、アンコールタイム中を含む設定変更/電断時の状態処理は本機固有直接資料を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の朝一ART優遇、短縮周期、当選率上昇など比較可能な恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有のストック消去、周期不利、モード降格等を直接確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / リール / 液晶 / ランプ / 朝一 / 据え置き判別` を追加して再探索したが、本機固有の高信頼な変更判別方法を確定できず。

numericResetData:
  normalArtOpportunityCycle: **約72Gごと（P-WORLDの「仮天井」表現。固定天井ではない）**
  resetShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  settingChangeCycleReset: **UNVERIFIED_AFTER_RESEARCH**
  carryOverCycleProgress: **UNVERIFIED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_UNVERIFIED_PERIODIC_RESET_DETAILS

## conflicts

- 重大な性能数値CONFLICTは今回確認せず。
- 「仮天井」という用語はP-WORLDで使用されるが、本文上は約72GごとのART抽選周期を指す。通常の固定ゲーム数天井と混同しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior for ART-cycle progress: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior for ART-cycle progress: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset during pre-ART/ART/encore: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific public morning distributions/rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. ベルコ株式会社 現存公式・旧ヤーマ機種情報「まことちゃん」 — https://www.s-bellco.co.jp/products/slot/yama_makotochan/ — 2010年3月登場、5号機・ART・タイアップ、ART「よいこコンサート」 — reliability: OFFICIAL
2. ALL7.jp 2010年3月導入一覧 — https://www.all7.jp/plans/index/2010/03/10 — ヤーマ「まことちゃん」導入予定2010-03-08 — reliability: CONTEMPORARY_SCHEDULE_DB
3. コミックナタリー「パチスロ『まことちゃん』3月から稼働なのら～」 — https://natalie.mu/comic/news/26578 — 2010-01-20公開、3月上旬より全国ホールで順次稼働予定 — reliability: CONTEMPORARY_MEDIA
4. P-WORLD「まことちゃん」 — https://www.p-world.co.jp/machine/database/5831 — ヤーマ、型式まことちゃんK、検定9S0955、BIG150枚、ART100/500枚・約+2.0枚/G・66〜90%ループ、約72G周期 — reliability: ANALYSIS_DB
5. パチマガスロマガ旧解析 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/a.php — ART約+2枚/G、100/500枚、BIG約150枚、通常約15G前兆 — reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧解析 ボーナス/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/h.php — BIG、初当たりART、合成、機械割設定別直接値 — reliability: ANALYSIS_HIGH
7. パチマガスロマガ旧解析 小役/ベース — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/c.php — 1000円あたりゲーム数は現存ページ上「現在調査中」 — reliability: ANALYSIS_HIGH_NEGATIVE_EVIDENCE
8. パチマガスロマガ旧解析トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/13/yama_slot_13.php — 本機専用解析カテゴリ確認 — reliability: ANALYSIS_HIGH
9. 5号機クロニクル ヤーマ — https://5goki.com/yama — 2010年3月、機械割96.5〜107.0%を照合 — reliability: RETROSPECTIVE_DB
