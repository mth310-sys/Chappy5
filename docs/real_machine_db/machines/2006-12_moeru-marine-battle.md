# モエる まりんバトる

machineName: モエる まりんバトる
manufacturer: エレコ / アルゼ系
releaseDate: 2006-12
generation: 5号機初期
systemType: ボーナス + RT/CZループ

## payoutRateBySetting

5号機クロニクル掲載:
- 設定1: 98.1%
- 設定4: 102.8%
- 設定6: 109.0%

reliability: ANALYSIS_SINGLE

## initialHitBySetting

設定別BIG/REGの比較可能な確率表は今回未取得。
K-Navi、メーカー公式、5号機クロニクル、表記揺れを含む検索で再探索したが、取得できた高信頼資料はゲーム構造と基本性能中心だった。

status: UNVERIFIED

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」を含め再探索したが、比較可能な数値を今回取得できず。

## netIncrease

- BIG後はチャレンジゾーンへ。
- チャレンジゾーン中にプラム入賞で33GのRT「追跡ゲーム」へ突入。
- RT33G終了後、再びチャレンジゾーンへ戻り、条件次第でRTとCZをループ。

1Gあたり純増値は今回未取得。

## basicPayout

5号機クロニクル掲載:
- BIG: 約270枚
- REG: 約110枚

メーカー公式はBIG中のミニゲームとポイント獲得による以後の有利展開を明記。

reliability: ANALYSIS_SINGLE + OFFICIAL(system)

## modeSpecificMinimumData

- BIG中にチェリー入賞でナビポイントを獲得。
- BIG後のチャレンジゾーンでチェリー入賞は通常ゲーム転落契機、プラム入賞はRT突入契機。
- ナビポイントによりチェリー回避を支援し、RT/CZループを維持する構造。
- 33G RT消化後は再びチャレンジゾーンへ。

## resetBehavior

resetQaStatus: `PARTIAL_RESEARCH_EXHAUSTED`
resetQaUpdatedAt: `2026-09-11`

settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。ナビポイント、CZ/33G RT残状態、ボーナス後状態の設定変更時処理を機種固有資料で固定できず。
carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。据え置きを純電源OFF→ONと同義扱いしない。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。電源OFF→ONのみの場合のナビポイント/CZ/RT状態契約を直接確認できず。
gameCounterReset: 固定ゲーム数天井を示す機種固有資料は確認できず `NO_FIXED_GAME_CEILING_CONFIRMED_AFTER_RESEARCH`。
ceilingAfterReset: `NOT_APPLICABLE_NO_FIXED_GAME_CEILING_CONFIRMED`。
modeAfterReset: ナビポイント/CZ/RTループに関する設定変更時の再抽選/引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
stateAfterReset: CZ滞在、33G RT残G、ナビポイント等の変更時/純電断時処理は `UNVERIFIED_AFTER_RESEARCH`。
advantageousSectionReset: `NOT_APPLICABLE`（5号機初期・有利区間制度前）。
resetBenefits: 設定変更時固有の朝一優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
resetPenalties: 設定変更時固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
resetDetection: ガックン、初期出目、ランプ等による本機固有の設定変更判別契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
numericResetData: `PUBLIC_MACHINE_SPECIFIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

### reset QA notes
- 公式/K-Navi/後年回顧資料で、BIG中に得たナビポイントを利用してBIG後CZでチェリー転落を回避し、プラム入賞から33G RTへ移行、RT終了後にCZへ戻るという基本状態機構を再確認。
- 2026-09-11に検索語を変更して「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ナビポイント 引継ぎ」「RT 引継ぎ」「天井」「ガックン」を再探索。
- 機種固有の設定変更/純電断時の状態保持契約は追加固定できなかった。一般的な5号機RT機や後継/類似機から補完しない。

## sources

取得日: 2026-08-31 / reset QA再取得日: 2026-09-11

1. ユニバーサルエンターテインメント公式 — モエる まりんバトる
   - https://www.universal-777.com/product/slot/moeru_marinebattle/
   - BIG中ミニゲーム、ポイント獲得により次の大当たりまでを有利に展開する基本構造
   - reliability: OFFICIAL
2. 5号機クロニクル — ユニバーサル系5号機全機種一覧
   - https://5goki.com/universal
   - 2006/12導入、設定1/4/6機械割、基本ボーナス獲得性能
   - reliability: ANALYSIS_SINGLE
3. K-Navi — モエるまりんバトる
   - https://p-kn.com/slot/718/
   - BIG後チャレンジゾーン、プラムでRT「追跡ゲーム」突入などゲームフロー
   - reliability: ANALYSIS_SINGLE
4. パチセブン — 5号機萌えスロ史
   - https://pachiseven.jp/articles/detail/14166
   - エレコ・2006年12月導入の照合
   - reliability: ANALYSIS_SINGLE
5. ウリぼーの萌えスロ日記 — https://ameblo.jp/urikko/entry-10146378232.html
   - 2006年12月、BIG中ナビポイント、BIG後CZ→プラムで33G RT→CZ復帰という当時実戦系回顧
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- 設定別BIG/REG確率
- 50枚あたりゲーム数
- RT 1Gあたり純増
- 設定変更/据え置き/純電断時のナビポイント・CZ・RT状態契約
- 本機固有の変更判別・公開朝一数値

## conflicts

5号機クロニクルの後年解説に、確認した他資料のCZ→33G RTループ構造と一致しない簡略説明があるため、ゲームフローはメーカー公式/K-Navi側を優先。数値は混ぜない。
