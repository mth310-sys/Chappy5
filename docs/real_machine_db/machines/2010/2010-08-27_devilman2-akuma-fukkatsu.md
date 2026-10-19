# デビルマンII ～悪魔復活～

machineName: デビルマンII ～悪魔復活～
manufacturer: エレコ
releaseDate: 2010-08-27
releaseDateStatus: CONFLICT_EXACT_DATE / OFFICIAL_MONTH_CONFIRMED
releaseDateNote: ユニバーサル公式は2010年8月発売。HAZUSE DATAは導入開始日2010-08-27、K-Naviとパチビーはホール導入開始/導入日2010-08-30とするためexact dateはCONFLICT。時系列本線では確認できた最古の直接導入日2010-08-27を主値とし、8/30説を消さず保持する。
generation: 5号機
systemType: A+ART / セットストック型ART「アーマゲドン」
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_RELEASE_DATE_CONFLICT_BASE_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線504「アベノ橋魔法☆商店街」を再取得。
- 開始時正本地点は recordCount 504 / chronologicalFrontier 2010-08-23。
- 2010-08-24〜2010-08-29境界を監査し、旧導入日資料の2010-08-27候補「デビルマンII－悪魔復活－」を確認。
- repo検索で同機未登録を確認したうえで505件目として追加。
- HAZUSEの8/27とK-Navi/パチビーの8/30は同一機の導入日資料差であり、二重登録しない。

## payoutRateBySetting

- 設定1: **98.1%**
- 設定2: **99.9%**
- 設定3: **104.2%**
- 設定4: **107.2%**
- 設定5: **112.7%**
- 設定6: **119.3%**

K-Navi・P-WORLDで一致。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG合成
- 設定1: **1/431.2**
- 設定2: **1/422.8**
- 設定3: **1/394.8**
- 設定4: **1/383.3**
- 設定5: **1/368.2**
- 設定6: **1/339.6**

### REG合成（プレミアムエピソード＋サバトチャンス）
- 全設定共通: **約1/762**

### ボーナス合算
- 設定1: **1/275.4**
- 設定2: **1/271.9**
- 設定3: **1/260.1**
- 設定4: **1/255.0**
- 設定5: **1/248.2**
- 設定6: **1/234.9**

### ART初当たり
- 設定1: **1/526.5**
- 設定2: **1/454.2**
- 設定3: **1/450.0**
- 設定4: **1/386.1**
- 設定5: **1/359.5**
- 設定6: **1/224.6**

### ボーナス＋ART合算
- 設定1: **1/181.8**
- 設定2: **1/170.1**
- 設定3: **1/164.8**
- 設定4: **1/153.6**
- 設定5: **1/146.9**
- 設定6: **1/114.8**

P-WORLDの精密値を主値とし、K-Naviの丸め値（1/181〜1/115）とも整合を確認。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「デビルマンII / デビルマンⅡ / デビルマンII-悪魔復活- / エレコ」に「50枚」「1000円」「千円」「ベース」「コイン持ち」「千円回転」を組み合わせ、メーカー公式、P-WORLD、K-Navi、パチビー、HAZUSE、当時/旧解析・回顧資料を横断したが、比較可能な本機固有の直接値を確定できなかった。小役確率からの逆算は行わない。
confidence: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## netIncrease

- ART「アーマゲドン」: **1セット50G**
- ART純増: **約+1.4枚/G**
- セットストック型。ストックがある限り継続。

メーカー公式はA+ART機であることを確認。50G・約+1.4枚/GはP-WORLD、K-Navi、パチビー、HAZUSEで照合。
confidence: OFFICIAL_TYPE_PLUS_ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- BIG: **約210枚 / 最大210枚**
- プレミアムエピソード: **約102枚 / 最大102枚**
- サバトチャンス: **約102枚 / 最大102枚**

P-WORLD・K-Navi・HAZUSEで照合。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時は低確・高確・超高確の内部状態が存在し、状態によりART抽選が変化する。
- HAZUSE/必勝本では超高確は通常の設定変更開始状態には含まれず、設定変更時は低確/高確の2択再抽選。
- 天井は複数旧解析資料で**ボーナス間1500G**。到達後のART突入が恩恵。天井ARTは無限ARTではないとする旧解析資料あり。
- 天井到達後のART終了で天井ゲーム数がリセットされるとの回顧資料はあるが、これは設定変更時の天井カウンタ処理とは別事象として扱う。

confidence: ANALYSIS_MULTI_SOURCE_HIGH_FOR_1500G_CEILING / ANALYSIS_SINGLE_FOR_POST_CEILING_COUNTER_NOTE

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。設定変更時に内部状態を低確/高確へ再抽選することをHAZUSEとパチ＆スロ必勝本で確認。天井ゲーム数、ARTストック、内部RT/CZ相当状態の設定変更時処理は直接確定できず推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1500G天井カウンタ、内部状態、ARTストック/残Gの保持を本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井カウンタ、低確/高確/超高確、ARTストック/残G、初期出目・液晶状態の復帰挙動は直接資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にボーナス間1500G天井の進捗がCLEAR/RETAINのどちらかを直接示す高信頼資料を確定できず。天井ART終了時にカウンタがリセットされる記述を設定変更挙動へ転用しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の天井短縮/変更を示す公開数値を確定できず。

modeAfterReset: **NOT_APPLICABLE_AS_GAME_NUMBER_MODE / INTERNAL_STATE_RESELECT_CONFIRMED**。ゲーム数解除モード型ではない。通常時内部状態について設定変更時に低確/高確へ再抽選。

stateAfterReset: **CONFIRMED_WITH_SOURCE_CONFLICT_NOTE**。HAZUSEおよびパチ＆スロ必勝本は全設定共通で**低確65.89% / 高確34.11%**。一方、単一旧二次資料に低確34.1% / 高確65.9%という逆転表記があるため、主値は高信頼2系統一致を採用しつつCONFLICTを保持。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **HIGH_STATE_START_34_11_PERCENT_CONFIRMED**。設定変更時、高確スタートが34.11%あることをHAZUSEと必勝本で確認。

resetPenalties: **LOW_STATE_START_65_89_PERCENT_CONFIRMED**。設定変更時、低確スタートが65.89%。天井進捗消失などの追加不利は直接確認できず。

resetDetection: **SPECIFIC_METHOD_UNVERIFIED_AFTER_RESEARCH**。当時実戦番組の紹介文に本機の「朝イチきっちり変更判別」を行う記述は残るが、公開本文から判別手順・条件を確定できない。ガックン、初期出目、ランプ、液晶、天井挙動等を検索語変更しても、本機固有の再現可能な判別法は確定できなかったため、方法そのものはUNVERIFIEDとする。

numericResetData:
- resetStateLow: **65.89%**（HAZUSE / パチ＆スロ必勝本）
- resetStateHigh: **34.11%**（HAZUSE / パチ＆スロ必勝本）
- resetStateSuperHigh: **0% / 選択対象外として扱う**（両資料の設定変更表は低確/高確のみ。超高確はART終了後のみ移行と説明）
- normalCeiling: **1500G bonus interval**（複数旧解析資料）
- settingChangeCeilingCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedARTInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_CONFIRMED_STATE_RESELECTION_OTHER_RESET_FIELDS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

- releaseDate: ユニバーサル公式 **2010年8月**、HAZUSE **2010-08-27**、K-Navi/パチビー **2010-08-30**。exact dateは平均化せずCONFLICT保持。
- settingChangeStateDistribution: HAZUSE＋パチ＆スロ必勝本 **低確65.89% / 高確34.11%** に対し、単一旧二次資料は **低確34.1% / 高確65.9%** と逆転表記。主値は高信頼2系統一致、逆転値も削除しない。
- ceiling: 複数旧解析資料は**ボーナス間1500G**で一致。後発別機種「SLOTデビルマンχ」の1280G情報を本機へ混入させない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeCeilingCounter / carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change ART stock / internal RT state treatment: UNVERIFIED_AFTER_RESEARCH
- resetDetection concrete method: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-04

1. ユニバーサルエンターテインメント公式「デビルマンII -悪魔復活-」 — https://www.universal-777.com/product/slot/devilman2/ — メーカー:エレコ、5号機、ボーナス+ART、発売2010年8月。
2. HAZUSE DATA「デビルマンII－悪魔復活－」 — https://data.hazuse.com/?genre=209&machine_code=0S0434 — 導入開始2010-08-27、内部状態、設定変更時低確65.89%/高確34.11%、BIG最大210枚、REG系最大102枚、ART50G・約+1.4枚/G。
3. K-Navi「デビルマンII-悪魔復活-」 — https://p-kn.com/slot/1250/ — ホール導入開始2010-08-30、機械割、ボーナス+ART合算、ART50G・約+1.4枚/G。
4. パチビー「デビルマンⅡ ～悪魔復活～」 — https://www.pachibee.jp/machines/about/210070002 — 導入日2010-08-30、A+ART概要、ART50G・約+1.4枚/G。
5. P-WORLD「デビルマンII‐悪魔復活‐」 — https://www.p-world.co.jp/machine/database/6044 — 設定別機械割、BIG/REG/ART/合算、基本獲得枚数、ART仕様。
6. パチ＆スロ必勝本「状態移行詳細[デビルマンII 悪魔復活]」 — https://p.hisshobon.jp/machine/1650/1/26196 — 設定変更時の低確65.89%/高確34.11%、通常3状態、超高確の移行条件。
7. スロット解析・攻略 slot-navi「デビルマンⅡ-悪魔復活-」 — https://slot-navi.com/10/devilman2/ — ボーナス間1500G天井、リセット情報は当該ページで調査中と明記。
8. Seven Peace旧解析「デビルマンⅡ 悪魔復活」 — https://www.mb.ccnw.ne.jp/seven-peace.com/a-na/tatata/debiru2/debirumannakuma.html — ボーナス間1500G天井、設定変更時状態の逆転表記（CONFLICT用）、各種性能値。
9. アニヲタWiki(仮)「デビルマンⅡ−悪魔復活−」 — https://w.atwiki.jp/aniwotawiki/pages/19076.html — ボーナス間1500G天井、天井ART終了後の天井G数リセット（回顧補助資料）。
10. ビデオマーケット「ネギ坊のパチスロ最強伝説 #430 デビルマンII～悪魔復活～」 — https://www.videomarket.jp/title/082072/A082072015999H01 — 当時実戦で朝一変更判別を実施した事実の補助。ただし具体的方法は本文非公開のためresetDetection確定には使用しない。
