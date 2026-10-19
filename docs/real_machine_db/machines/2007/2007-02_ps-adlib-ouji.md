# PSアドリブ王子

machineName: PSアドリブ王子
formalModelName: PSアドリブ王子VB
manufacturer: 三洋物産
releaseDate: 2007-02-18
generation: 5号機初期
systemType: ノーマル / BIGのみ・3種ナビ差ボーナス

## payoutRateBySetting

パチマガスロマガ旧攻略のPAYOUTと、5号機クロニクルの機械割を照合。小数第2位までの解析値と丸め値が整合する。

- 設定1: 95.12%（5号機クロニクル 95.1%）
- 設定2: 97.61%（97.6%）
- 設定3: 100.06%（100.1%）
- 設定4: 102.60%（102.6%）
- 設定5: 104.98%（105.0%）
- 設定6: 107.26%（107.3%）

信頼度: ANALYSIS_HIGH

## initialHitBySetting

本機はBIGのみ。パチマガスロマガ旧攻略のボーナス抽選確率:

- 設定1: 1/307.68
- 設定2: 1/291.27
- 設定3: 1/267.49
- 設定4: 1/254.02
- 設定5: 1/244.54
- 設定6: 1/236.59

同資料の「ボーナス単独抽選確率」は設定1 1/356.17 → 設定6 1/269.70で、上記は小役重複を含む総ボーナス確率として扱う。異なる定義なので混在させない。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ旧攻略の1000円あたりプレイ数（50枚等価の物差しとして保存）:

- 設定1: 46.14P
- 設定2: 47.18P
- 設定3: 46.15P
- 設定4: 47.19P
- 設定5: 47.75P
- 設定6: 49.07P

信頼度: ANALYSIS_HIGH

## netIncrease

非該当。ART/RTによる継続純増機ではない。

## basicPayout

P-WORLD、グリーンべると当時記事、パチマガスロマガ旧攻略、後年のガイドワークス監修回顧を照合。

- ADLIB BONUS: 380枚以上の払い出しで終了
- スーパーアドリブボーナス: 平均獲得約300枚
- アドリブボーナス赤: 平均獲得約270枚
- アドリブボーナス青: 平均獲得約240枚
- スーパーは15枚役を全ナビ、赤は約1/3でナビ、青はナビなし

ボーナスは同じ規定払い出しでも15枚役2択のナビ率/自力正解率によって実獲得枚数が変動する。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- BIGのみのノーマルタイプ
- ボーナス中の2択15枚役ナビ率により3種類のBIG性能が変化
- BIG終了後は2択成功率に応じて「昇格チャンス」20G/40G/60G以上。スーパーアドリブボーナス後は100G
- 通常時チェリー成立時の1/4でも20Gの昇格チャンスへ移行
- 昇格チャンス中にボーナス当選するとスーパーアドリブボーナス確定
- 後年のガイドワークス監修回顧では1111G以上ハマった後の次回ボーナスはスーパー確定と整理されるが、救済RTやボーナス当選天井ではなく「ボーナス種別の救済」として扱う

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
qaRecheckedAt: 2026-09-12

- settingChangeBehavior: 設定変更時に昇格チャンス状態、1111G救済用ゲーム数、成立済みボーナス状態がどう扱われるかを、型式名・救済・リセット・朝一・設定変更・据え置き等で再探索したが本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時の昇格チャンス状態/1111G救済用ゲーム数/成立済みボーナス状態の引継ぎを、設定変更・純電断と分離して示す公開契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycleBehavior: 純電源OFF→ONのみの場合の昇格チャンス状態/1111G救済用ゲーム数/成立済みボーナス状態の挙動は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。一般的5号機挙動から推定しない。
- gameCounterReset: ボーナス当選天井は確認されない。1111G以上ハマリ後の「次回スーパーBIG確定」救済は確認済みだが、そのカウンタの設定変更/据え置き/純電断別処理は `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: ボーナス当選天井・短縮天井は `NOT_APPLICABLE_NO_BONUS_HIT_CEILING_CONFIRMED`。1111G救済はボーナス種別救済であり、設定変更後の扱いは未固定。
- modeAfterReset: 朝一専用モード/設定変更専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: 昇格チャンスの設定変更/据え置き/純電断別処理は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: 有利区間制度導入前のため `NOT_APPLICABLE_PRE_YUURI_KUKAN`。
- resetBenefits: 設定変更・朝一固有の主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有のガックン、初期出目、液晶/ランプ表示等による変更判別条件・発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData:
  - normalBonusHitCeiling: `NONE_CONFIRMED`
  - rescueRule: `1111G以上ハマリ後の次回ボーナスはスーパーBIG確定（後年回顧資料）`
  - rescueCounterAfterSettingChange: `UNVERIFIED_AFTER_RESEARCH`
  - resetModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
  - resetHitBoost: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
  - gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

### resetBehavior QA 再探索メモ — 2026-09-12

「PSアドリブ王子 / アドリブ王子 / PSアドリブ王子VB / 三洋物産」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 昇格チャンス / 1111G / 救済 / 天井 / ガックン / 成立済みボーナス」を組み合わせ、P-WORLD、当時グリーンべると、パチマガスロマガ旧攻略、HAZUSE系資料、5号機DB、後年ガイドワークス回顧を再横断。通常の昇格チャンス仕様、1111G以上ハマリ後の次回スーパーBIG確定という救済仕様は再確認できたが、設定変更・据え置き・純電断時の内部状態/救済カウンタ処理を直接規定する機種固有資料は追加固定できなかった。既存 `coreStatus: COMPLETE_CORE` は維持し、resetBehavior品質状態のみ `PARTIAL_RESEARCH_EXHAUSTED` とする。

## sources

初回取得日: 2026-08-31
resetBehavior QA再取得日: 2026-09-12

1. P-WORLD — PSアドリブ王子
   - https://www.p-world.co.jp/machine/database/4565
   - 型式名PSアドリブ王子VB、380枚以上払い出し終了
   - reliability: INDUSTRY
2. グリーンべると / P-WORLD業界ニュース — 三洋、「海」の新作とオリジナルパチスロ発表（2007-02-02）
   - https://news.p-world.co.jp/articles/2027/greenbelt
   - 2007年2月納品、スーパー約300枚/赤約270枚/青約240枚、スーパー後100G、通常時チェリー1/4で20G昇格チャンス
   - reliability: INDUSTRY
3. パチマガスロマガ旧攻略 — アドリブ王子 ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/h.php
   - 設定別BIG確率1/307.68〜1/236.59、PAYOUT 95.12〜107.26%
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — アドリブ王子 小役/1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/c.php
   - 設定別46.14〜49.07P/1000円
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — アドリブ王子 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/a.php
   - 5号機/5ライン/3枚掛け、ADLIB BONUS380枚規定払い出し、獲得枚数変動
   - reliability: ANALYSIS_HIGH
6. HAZUSE — アドリブ王子解析・機種情報
   - https://hazuse.com/i/data/adlib/top.htm
   - 3種BIG、昇格チャンス20/40/60G以上、スーパー後100G、チェリー1/4で20G、380枚以上払い出し終了
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — 三洋物産5号機一覧
   - https://5goki.com/sanyo
   - 2007/2、機械割95.1〜107.3%
   - reliability: ANALYSIS_SINGLE
8. 漫画パチスロパニック7 / note — 過去からの便り 第4回
   - https://note.com/pachislot_panic7/n/n22f6b15efe66
   - ガイドワークス監修回顧。BIGのみ3種、ナビ差、昇格チャンス、1111G以上ハマリ時の次回スーパーBIG確定、救済RTなし
   - reliability: ANALYSIS_HIGH

## missingFields

- 設定変更/据え置き/純電源OFF→ON時の昇格チャンス内部状態処理
- 1111G救済カウンタの設定変更/据え置き/純電断時処理
- 成立済みボーナス状態の3条件別処理
- 本機固有のresetDetection（ガックン等）

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

## conflicts

- 現時点で重大な数値競合なし。機械割の95.12〜107.26%と95.1〜107.3%は丸め精度差として扱う。
