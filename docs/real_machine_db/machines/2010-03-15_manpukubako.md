# 満福箱

machineName: 満福箱
manufacturer: メテオ / ラスター
formalModelName: **UNVERIFIED_AFTER_RESEARCH**
approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
releaseDate: 2010-03-15（当時導入スケジュール。納品日2010-03-14）
generation: 5号機
systemType: 端メダル専用ノーマル / 1・2・3BET対応 / 特賞ボーナス主体
coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_AND_BASE_UNVERIFIED_RESET_MOSTLY_NOT_APPLICABLE

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前実レコード「まことちゃん」を再取得してから継続。
- 開始時正本はrecordCount 464 / chronologicalFrontier 2010-03-08。
- LATEST_HANDOFF指定の2010-03-08同日候補「哲也 新宿VS上野天涯孤独DX」を監査。当時新台スケジュールの長表記は、既存457「哲也 新宿VS上野DX」/型式「哲也DX2」と同じ2010年DX版を指すと判断。5号機クロニクルでも2010年機は「哲也 新宿vs上野DX」、旧パチマガも同名専用ページで扱うため、別機種レコードは作成しない。
- 当時新台スケジュールでは3月8日の次のパチスロ導入群が3月15日で、本機「満福箱」のみを掲載。3月9〜14日に本線へ挿入すべき別の具体日確認済み未登録パチスロを確定できなかったため、本機を465件目として追加。
- 当時スケジュールは2010-03-14納品 / 2010-03-15導入。5号機クロニクル、スロリスクタイムも2010年3月機として整合。

## payoutRateBySetting

- **UNVERIFIED_AFTER_RESEARCH / BET_CONDITION_DEPENDENT_SPECIAL_MACHINE**
- 後年回顧記事には「設定1で約63.6%」という著しく低い出玉率の記述がある。
- ただし本機は1BET・2BET・3BETでボーナス確率自体が大きく異なる特殊仕様で、旧パチマガ現存トップにはPAYOUT項目があるものの、今回取得できた本文からBET条件込みの設定別PAYOUT表を直接回収できなかった。
- 5号機クロニクルも本機の機械割を「不明」としているため、63.6%を通常の設定1代表値として正本化せず、参考値としてのみ保持する。

confidence: UNVERIFIED_WITH_RETROSPECTIVE_REFERENCE

## initialHitBySetting

### 特賞ボーナス確率 — 1BET
- 設定1: **1/189.96**
- 設定2: **1/199.80**

### 特賞ボーナス確率 — 2BET
- 設定1: **1/84.89**
- 設定2: **1/94.98**

### 特賞ボーナス確率 — 3BET
- 設定1: **1/54.98**
- 設定2: **1/58.00**

旧パチマガスロマガ本機専用解析の直接値。設定は2段階。

confidence: ANALYSIS_HIGH_DIRECT_SINGLE_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

旧パチマガ本機専用「小役出現確率・通常時 / 1000円あたりのゲーム数」ページ自体が現存状態で「現在調査中」。本機は端メダル消費を意図した1・2・3BET対応特殊機のため、一般機の50枚ベースと単純比較できる直接値が見つからない。`満福箱 / METEOR / メテオ / ラスター` と `1000円 / 50枚 / ベース / コイン持ち / 小役` を組み替えて再探索したが定量値を確定できず、逆算しない。

confidence: UNVERIFIED

## netIncrease

- ART/AT/RTによる通常時純増: **NOT_APPLICABLE / NONE_CONFIRMED**
- 出玉契機は「宝」絵柄入賞による特賞ボーナス。

confidence: ANALYSIS_HIGH_FOR_SYSTEM

## basicPayout

- 特賞: **約47枚**
- 規定払い出し: **50枚**
- 「宝」は必ず小役と同時成立し、小役は5枚または10枚。旧パチマガは特賞後即ヤメなら50枚+αを得られる構造として説明。
- 1枚・2枚・3枚掛けに対応、中段1ライン、設定2段階。

confidence: ANALYSIS_HIGH_DIRECT

## modeSpecificMinimumData

- 本機は余りメダルを消費する「端メダル専用」コンセプトの特殊ノーマル機。
- 1BET / 2BET / 3BETで特賞確率が別々に設定されている。
- どこかのリールに「宝」が入賞すれば特賞。宝は小役との同時成立。
- ART/AT、周期モード、ゲーム数解除、天井、ストック管理など、朝一リセットで比較すべき持続型ゲーム数システムは確認できない。
- 後年資料ではラスター発売機として整理される一方、旧パチマガはメーカー表記を「メテオ」、著作権表記をMETEORとする。当時導入スケジュールは「メテオ/ラスター」と併記するため、manufacturerは両者を保持。

confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CONCEPT

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SETTING_OPERATION**。設定変更操作そのものの電断・リール挙動を本機固有資料で直接確定できず。ただし公開ゲーム性上、設定は2段階で、持続型のゲーム数天井・ART/ATモードは確認されない。

carryOverBehavior: **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING / NO_PERSISTENT_MODE_CONFIRMED**。据え置きで引き継ぐべき公開ゲーム数天井・周期・ART/ATストック・モードは確認されない。ボーナス成立済み等の内部規則まで一般論で補完はしない。

powerCycleBehavior: **UNVERIFIED_FOR_LOW_LEVEL_STATE / NOT_APPLICABLE_FOR_PUBLIC_CEILING_COUNTER**。単純電源OFF→ON時の低レベル内部状態は本機固有資料を確定できず。一方、公開された天井ゲーム数・周期カウンタ自体が確認されないため、天井進捗の電断リセット/引継ぎは対象外。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。ゲーム数天井、周期ゲーム数、規定ゲーム数解除を確認できない。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。通常天井・リセット短縮天井とも確認なし。

modeAfterReset: **NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED**。朝一専用モード、通常/高確などの持続モード体系を確認できない。

stateAfterReset: **UNVERIFIED_FOR_LOW_LEVEL_BONUS_STATE**。ボーナス成立済み等を含む低レベル内部状態の設定変更/電断処理は直接資料なし。ART/AT/CZ/RT状態は `NOT_APPLICABLE`。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット短縮、朝一高確、朝一特賞優遇などの公開恩恵なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失、モード降格、ストック消去などの公開不利要素なし（そもそも対象システムを確認せず）。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / リール / ランプ / 朝一 / 据え置き / 設定変更判別` を含め、本機固有の変更判別方法を確定できず。

numericResetData:
  resetShortenedCeiling: **NOT_APPLICABLE**
  normalCeiling: **NONE_CONFIRMED**
  settingChangeGameCounter: **NOT_APPLICABLE_NO_PUBLIC_COUNTER**
  carryOverGameCounter: **NOT_APPLICABLE_NO_PUBLIC_COUNTER**
  publishedResetModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_MOSTLY_NOT_APPLICABLE_SIMPLE_BONUS_MACHINE

## conflicts

- manufacturer表記: 旧パチマガは「メテオ」/ ©METEOR、後年DBは「ラスター」、当時導入スケジュールは「メテオ/ラスター」。別機種とはせず共同/流通表記差として両方保持。
- 機械割: 後年記事に設定1約63.6%という記述がある一方、5号機クロニクルは不明。さらに本機はBET数で抽選確率が異なるため、条件不明の63.6%を設定1標準機械割へ固定しない。
- 後年記事の「1枚掛けでも1/98くらい」という説明は、旧パチマガ直接値の1BET 1/189.96（設定1）/1/199.80（設定2）と一致しない。平均せず、旧解析のBET別直接値を主値とし、後年回顧値は `CONFLICT_RETROSPECTIVE_APPROXIMATION` として扱う。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- payoutRateBySetting under explicit BET conditions: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- low-level settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- low-level powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific public morning rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチマガスロマガ旧解析「満福箱」基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/a.php — メテオ表記、1/2枚掛け対応、設定2段階、宝特賞、約47枚/規定50枚 — reliability: ANALYSIS_HIGH
2. パチマガスロマガ旧解析「満福箱」ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/h.php — 1BET/2BET/3BET×設定1/2の特賞確率 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ旧解析「満福箱」小役/ベース — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/c.php — 小役確率・1000円あたりゲーム数とも現存ページで「現在調査中」 — reliability: ANALYSIS_HIGH_NEGATIVE_EVIDENCE
4. パチマガスロマガ旧解析トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/meteor_slot/02/meteor_slot_02.php — PAYOUT項目の存在、攻め時・ヤメ時「ナシ」、本機専用解析カテゴリ — reliability: ANALYSIS_HIGH
5. 2010年3月1日～4月19日新台導入スケジュール（当時系まとめ） — https://ameblo.jp/pachimatome/entry-10470039494.html — 2010-03-14納品 / 03-15導入、メテオ/ラスター、端メダル専用ノーマルAタイプ — reliability: CONTEMPORARY_SCHEDULE_ARCHIVE
6. 5号機クロニクル「ラスター」 — https://5goki.com/luster — 満福箱2010/3、ラスター機として掲載、機械割不明 — reliability: RETROSPECTIVE_DB
7. パチ7「5号機歴代最低の設定1出玉率機種は？」 — https://pachiseven.jp/articles/detail/14329 — ラスター、2010年、端玉専用、1/2/3枚掛け対応、社会貢献型という回顧 — reliability: RETROSPECTIVE_MEDIA
8. なな徹「過去最低の出玉率」 — https://nana-press.com/post/1575422 — 設定1約63.6%との回顧値、ラスター×メテオのコラボ説明。ただしBET条件不明かつ1BET確率説明は旧解析と競合 — reliability: RETROSPECTIVE_MEDIA_CAUTION
9. P-WORLD 2010年03月導入カレンダー — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2010-03 — 2010年3月導入月の外部照合 — reliability: INDUSTRY_DB
