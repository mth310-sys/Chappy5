# もっと！チバリヨ-30

recordNo: 1541
machineName: もっと！チバリヨ-30
manufacturer: ネット
formalModel: SもっとチバリヨNB-30
inspectionCode: 1S1924
releaseDate: 2022-12-19
generation: 6.4号機 / 30Φメダル機
systemType: AT / 擬似ボーナス連チャンタイプ

## payoutRateBySetting
- 設定1: 97.9%
- 設定2: 99.4%
- 設定3: 101.3%
- 設定4: 103.2%
- 設定5: 105.3%
- 設定6: 107.6%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当たり
- 設定1: 約1/255
- 設定2: 約1/252
- 設定3: 約1/237
- 設定4: 約1/224
- 設定5: 約1/211
- 設定6: 約1/202

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

注記:
- ぱちんこキュレーション、スロパチクエスト、後年整理資料で設定5を約1/211として整合。
- パチナビの一部表だけ設定5を1/221とするため `CONFLICT_SOURCE_VALUE` として保持し、canonicalは複数資料一致の1/211を採用。

## baseGamesPer50
- 約33.7G/50枚（資料によって約34G表記）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナスAT純増: 約3.0枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG: 70G、平均約210枚。
- REG: 30G、平均約90枚。
- BIG/REG比率の目安は約60% / 約40%とする解析あり。
- ボーナス中は1G連抽選を行い、アンちゃんランプ点灯で1G連確定。
- 天国: 32G以内のボーナス連チャン、ループ率80%over。
- 超天国: 32G以内、ループ率85%over。
- パトランプモード: 32G以内、ループ率約92%。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時の主なボーナス契機は毎ゲーム抽選 / ゲーム数天井 / チェリー回数天井。
- ゲーム数天井: 通常時最大900G。モードによって500G側等の浅い天井も存在。
- チェリー回数天井: 通常時チェリー最大40回でボーナス。
- 同一有利区間内で天国非移行のボーナスが3回続いた場合、3回目ボーナス後に天国へ移行。
- 通常系5モード: 通常A / 通常B / 天国チャンスA / 天国チャンスB / パトランプ準備。
- 天国系3モード: 天国 / 超天国 / パトランプ。
- 有利区間リセット時は53%で天国チャンス以上（天国チャンスA / 天国チャンスB / パトランプ準備）。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_PURE_POWER_CYCLE_AND_RESET_SPECIFIC_MODE_TABLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井進行RESET。
- モードRESET / 再抽選。
- 設定変更時の詳細モード振り分けは高信頼解析でも調査中で、公開値を固定できていない。
- 内部状態について、モード以外の独立した状態概念を朝一契約として固定できる資料は確認できず、一般論では補完しない。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井進行CARRY_OVER。
- モードCARRY_OVER。
- 同一有利区間内のボーナススルー履歴も有利区間継続を前提とするため、据え置き時は進行継続として扱う。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の天井 / モード / 有利区間について、本機固有の直接契約を明示する高信頼資料は、機種名・型式・メーカー名と `電源OFF ON / 電断 / 電源投入 / 据え置き` を組み替えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更を伴わない単なる電断を据え置きと同一と推定して補完しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井は最大900G。
- チェリー回数天井は最大40回。

### ceilingAfterReset
- 設定変更で既存の天井進行はRESET。
- 設定変更時だけ通常最大900Gより固定短縮されるという公開契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- モードごとに浅い天井が存在するが、これは通常モード仕様であり設定変更専用固定短縮とは分離。

### modeAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 設定変更時の詳細振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 有利区間リセット時: 53%で天国チャンス以上。
- 純電源OFF→ON時: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 朝一客AIに必要な独立状態として確定できたのはモード管理。モード以外の内部状態について設定変更 / 据え置き / 純電断の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 有利区間リセット時は53%で天国チャンス以上。
- 有利区間ランプによる有利区間リセット判別は不可。
- 純電源OFF→ON単独時は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 設定変更そのものに対する専用の確定恩恵は高信頼解析で「調査中」。
- 有利区間リセット時は53%で天国チャンス以上へ移行する公開値があり、朝一で設定変更により有利区間がリセットされた場合の主要な朝一優遇材料となる。
- ただし53%は「設定変更時専用モード振り分け」としてではなく「有利区間リセット時」の数値として保存する。

### resetPenalties
- 設定変更で前日のゲーム数天井、チェリー回数天井進行、モード、有利区間内スルー履歴を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 高信頼解析でリセット判別は「調査中」。
- 有利区間ランプでは設定変更 / 有利区間リセットを判別できない。
- 本機固有のリールガックン条件 / 発生率は `もっと！チバリヨ-30 / もっとチバリヨ / SもっとチバリヨNB-30 / ネット` と `設定変更 / リセット / 朝一 / 据え置き / ガックン / リールガックン / 電断 / 有利区間` を組み替え、解析サイト・旧DB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 前日ゲーム数やボーナススルー履歴を把握している場合、翌日の天井到達位置や天国移行挙動は据え置き推測材料になり得るが、単独確定材料とはしない。

### numericResetData
- 通常ゲーム数天井: 最大900G。
- チェリー回数天井: 最大40回。
- 同一有利区間内ボーナススルー天井: 天国非移行が3回続いた場合、3回目ボーナス後に天国移行。
- 有利区間リセット時: 天国チャンス以上53%、通常A/B合算47%。
- 設定変更時の詳細モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 有利区間リセット時の天国チャンス以上選択率: 53%。
- 内訳対象: 天国チャンスA / 天国チャンスB / パトランプ準備。
- 残り47%は通常A / 通常B合算。
- 設定変更時に有利区間がリセットされるため朝一判断に有効だが、資料定義上は「設定変更専用値」ではなく「有利区間リセット時」の公開値として保持。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `もっと！チバリヨ-30 / もっとチバリヨ / SLOTもっとチバリヨ / SもっとチバリヨNB-30 / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / ガックン / 有利区間` を組み替えて検索。
- NET公式発表相当プレス、業界検定記事、P-WORLD、なな徹、一撃、HAZUSE、必勝本、スロパチクエスト、ぱちんこキュレーション、旧整理資料を横断。
- 最初の未発見だけでUNVERIFIEDにせず、純電断単独契約、設定変更専用詳細モード振り分け、本機固有ガックンのみを欠損として残した。

## conflicts
- ボーナス初当たり設定5: 複数資料は約1/211、パチナビ一部表のみ1/221。`CONFLICT_SOURCE_VALUE`。canonicalは複数資料一致の約1/211。
- 有利区間リセット時53%は設定変更時専用の全モード振り分けではない。定義混同を避けるため独立保持。

## sources
取得日: 2026-09-13

- NETプレスリリース相当 / DreamNews: https://www.dreamnews.jp/press/0000267155/
  - ネット製、もっと！チバリヨ-30、2022年12月全国導入予定。
- GreenBelt「『S／沖ドキ！GOLD』などパチスロ4型式、パチンコ4型式が検定を通過」: https://web-greenbelt.jp/post-64523/
  - 型式 `SもっとチバリヨNB-30`、ネット名義の検定通過。
- HAZUSE基本 / AT: https://hazuse.com/machine/pachislot/1S1924/ / https://hazuse.com/machine/pachislot/1S1924/genre/209/
  - 型式、検定番号 `1S1924`、導入日、機械割、基本仕様。
- ぱちんこキュレーション: https://pachinko-curation.com/34078/
  - 2022-12-19、6.4号機、約34G/50枚、純増3.0枚/G、設定別機械割・初当たり、モード構造。
- なな徹総合: https://nana-press.com/kaiseki/machine/473/
  - 約33.7G/50枚、純増約3.0枚/G、設定変更 / 据え置き契約、有利区間リセット53%。
- なな徹朝一: https://nana-press.com/kaiseki/machine/473/12916/
  - 設定変更: 有利区間・天井・モードRESET、据え置きCARRY_OVER、リセット判別調査中、有利区間ランプ判別不可。
- なな徹天井: https://nana-press.com/kaiseki/machine/473/12915/
  - 最大900G、チェリー最大40回、同一有利区間内ボーナス3連続単発後の天国移行。
- なな徹モード: https://nana-press.com/kaiseki/machine/473/12917/
  - 全8モード、設定変更時モード再抽選、詳細調査中、有利区間リセット時53%で天国チャンス以上。
- 一撃モード: https://1geki.jp/slot/s_mtchibariyo/42/
  - 通常5モード / 天国3モード、有利区間リセット53%、天国系ループ率。
- 一撃小役 / ベース: https://1geki.jp/slot/s_mtchibariyo/5/
  - 約33.7G/50枚。
- パチ＆スロ必勝本 基本: https://p.hisshobon.jp/vpage/2504/2
  - BIG約210枚 / REG約90枚、最大900G、ゲーム性。
- パチ＆スロ必勝本 モード: https://p.hisshobon.jp/machine/4001/1/92984
  - 5通常モード / 3天国モード、500or900G天井、有利区間移行時53%天国チャンス以上。
- スロパチクエスト: https://www.slopachi-quest.com/article/motto-chibariyo-settei/
  - 2022-12-19、設定別スペック、BIG/REG性能。
- パチナビ設定判別: https://pachinavi.net/machines/motto-chibariyo-30/settei/
  - 設定5初当たり1/221表記があり、他資料とのCONFLICT確認用。

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_PURE_POWER_CYCLE_AND_RESET_SPECIFIC_MODE_TABLE
confidence: HIGH core / HIGH setting-change-carryover reset core / HIGH public advantageous-section reset 53% / inspection HIGH / pure power-cycle & gackun UNVERIFIED_AFTER_RESEARCH
