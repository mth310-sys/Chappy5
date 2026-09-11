# スーパーボム

status: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: スーパーボム
manufacturer: SNKプレイモア
releaseDate: 2007-04-08（グリーンべると/P-WORLD当時記事の納品開始日）
generation: 5号機初期
systemType: ボーナス + RT / 完全告知

## 性能コア

payoutRateBySetting:
- 設定1: 96.0%
- 設定2: 99.0%
- 設定3: 102.0%
- 設定4: 104.0%
- 設定5: 107.0%
- 設定6: 109.0%

confidence: ANALYSIS_SINGLE

initialHitBySetting:
- BIG
  - 設定1: 1/376.60
  - 設定2: 1/352.30
  - 設定3: 1/331.00
  - 設定4: 1/312.10
  - 設定5: 1/295.20
  - 設定6: 1/280.10
- CB
  - 設定1: 1/753.30
  - 設定2: 1/704.70
  - 設定3: 1/662.00
  - 設定4: 1/624.20
  - 設定5: 1/590.40
  - 設定6: 1/560.10

confidence: ANALYSIS_SINGLE

baseGamesPer50:
- 設定1: 約34.70G/1000円
- 設定2: 約34.95G/1000円
- 設定3: 約35.19G/1000円
- 設定4: 約35.44G/1000円
- 設定5: 約35.69G/1000円
- 設定6: 約35.94G/1000円
- 当時の1000円あたりゲーム数表記を原値として保持。50枚貸し相当の物差しとして利用する。

confidence: ANALYSIS_SINGLE

netIncrease:
- RT「ボンバーゾーン」: 約+0.6枚/G。
- 次回ボーナスまで継続、規定上の最大は5000G。

confidence: INDUSTRY

basicPayout:
- BIG: 345枚超払い出し終了 / 平均・純増目安 約250枚
- CB（業界記事ではRB表記）: 245枚超払い出し終了 / 約204枚

confidence: INDUSTRY + ANALYSIS_HIGH

modeSpecificMinimumData:
- 完全告知タイプ。
- BIG後は32Gの「ボンバーチャンス」。この間のチャンスリプレイ成立でRT「ボンバーゾーン」へ移行。
- 当時業界記事ではBIG後ボンバーゾーン突入は概ね25%。設定差も若干ある旨の記載あり。
- CB/RB後は128Gのチャンスリプレイ高確率状態となり、ボンバーゾーン突入は約11%。
- ボンバーゾーンは次回ボーナスまで（最大5000G）のRT、純増約0.6枚/G。
- 有利区間制度導入前。

coreStatus: PARTIAL

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-12

settingChangeBehavior:
- `スーパーボム / SUPER BOMB / SNKプレイモア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / ボンバーチャンス / ボンバーゾーン / 成立済みボーナス / ガックン` を組み替え、当時業界記事、旧攻略、数値DB、メーカー年表、回顧資料まで再探索。
- 本機固有の設定変更時に、ボンバーチャンス残りG・ボンバーゾーンRT・成立済みボーナス/告知待ち状態をどう処理するかを直接明記した高信頼資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機RT機の挙動からRESET/CARRYを推測補完しない。

carryOverBehavior:
- 通常時ゲーム数によるボーナス天井は確認できないため、通常天井ゲーム数の据え置き問題はNOT_APPLICABLE。
- RT「ボンバーゾーン」中閉店時の据え置き翌日持越し、BIG後32G/CB後128Gの高確率状態残りGの持越しは、本機固有資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior:
- 純電源OFF→ONのみと設定変更を区別した、本機固有のボンバーチャンス/ボンバーゾーン/成立済みボーナス状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- 一般論から「純電断なら必ずRT継続」等の固定は行わない。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。通常時ゲーム数天井は確認できない。
- ボンバーチャンス32G/CB後128Gはボーナス後状態の規定ゲーム数であり、通常時天井とは分離する。

ceilingAfterReset:
- NONE_CONFIRMED。通常時ゲーム数天井および設定変更時の短縮天井・朝一天井は確認できない。

modeAfterReset:
- 通常時のゲーム数モード/朝一専用モードを示す公開資料は確認できない。
- ボーナス後高確/RTは内部状態として別管理し、未確認の朝一モードへ読み替えない。

stateAfterReset:
- BIG後32G「ボンバーチャンス」、CB/RB後128Gのチャンスリプレイ高確率状態、RT「ボンバーゾーン」の設定変更・据え置き・純電断時処理はいずれも `UNVERIFIED_AFTER_RESEARCH`。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の朝一RT、短縮天井、専用高確率状態等は固定できない。

resetPenalties:
- NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection:
- 本機固有のガックン発生条件/発生率、初期出目、液晶/ランプ、ボンバーチャンス表示等を利用した設定変更確定契約は、検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後年の一般的なリセット判別論を本機固有仕様として流用しない。

numericResetData / publicMorningNumbers:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 設定変更時RT/CZ継続率・初期状態振り分け: NO_PUBLIC_MACHINE_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH

## resetBehavior 遡及QAメモ
2026-09-12。メーカー/機種名表記に加え、`ボンバーチャンス / ボンバーゾーン / RT / チャンスリプレイ / 設定変更 / リセット / 据え置き / 電断 / 朝一 / ガックン / 持ち越し` を組み替え、グリーンべると/P-WORLD当時記事、パチマガスロマガ旧機種資料、pacnk、5号機回顧DB、メーカー系年表を再探索。性能コアのRT仕様は確認できたが、リセット3区分に対する機種固有の直接契約は発見できなかった。既存性能側 `coreStatus: PARTIAL` は変更せず、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` として正式化する。

## sources

取得日: 2026-09-12

1. グリーンべると / P-WORLD「SNKプレイモアから完全告知機『スーパーボム』」2007-03-16
   - https://news.p-world.co.jp/articles/2097/greenbelt
   - 2007-04-08納品、BIG約250枚、RB/CB約204枚、BIG後32G/CB後128GのRT高確、RT最大5000G、純増0.6枚/G、RT突入目安約25%/約11%を確認。
   - リセット/据え置き/純電断契約の記載は確認できない。
   - reliability: INDUSTRY

2. pacnk「スーパーボム 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_supabomu.html
   - 2007年4月導入、設定1〜6のBIG/CB確率、PAYOUT 96〜109%を確認。
   - 設定示唆なし、数値判別中心とする後年整理。朝一リセット契約の直接記載なし。
   - reliability: ANALYSIS_SINGLE

3. パチマガスロマガ「スーパーボム 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/11/a.php
   - RT/チャンスゾーン/完全告知、BIG345枚超・約250枚、CB245枚超・約204枚、最大5000G RTを確認。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ「スーパーボム 小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/11/c.php
   - 設定別1000円あたり34.70〜35.94Gを確認。
   - reliability: ANALYSIS_SINGLE

5. 5号機クロニクル「SNKプレイモア」
   - https://5goki.com/snkplaymore
   - 2007年機としてスーパーボムをメーカー系年表で補助確認。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定別PAYOUTの別系統照合
- 設定変更/据え置き/電源OFF→ON時のRT/CZ/成立済みボーナス状態処理: UNVERIFIED_AFTER_RESEARCH
- 本機固有の設定変更判別: UNVERIFIED_AFTER_RESEARCH
- 公開朝一確率付き数値: NO_PUBLIC_MACHINE_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH

## conflicts

- 現時点で性能コアの明確な数値競合は確認していない。
- 当時業界記事は204枚側を「REG」と表記し、パチマガスロマガ/pacnkは「CB」と表記するため、役名称の表記差を保持する。獲得性能は約204枚で一致。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
