# スーパーボム

status: PARTIAL
qaResetBehavior: PARTIAL

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

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「スーパーボム / SUPER BOMB / SNKプレイモア / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / ボンバーゾーン / ガックン」を組み合わせ、現存する当時業界記事・解析サイト・旧DBを再探索したが、本機固有の設定変更時RT/CZ状態処理を明記した高信頼資料は今回確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数によるボーナス天井は確認できない。
- RT「ボンバーゾーン」中閉店時の据え置き翌日持越し可否は本機固有資料で確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有のRT/CZ状態処理はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。通常時ゲーム数天井は確認できない。

ceilingAfterReset:
- NONE_CONFIRMED。設定変更時の短縮天井・朝一天井は確認できない。

modeAfterReset:
- 通常時のゲーム数モード/朝一専用モードを示す公開資料は確認できない。

stateAfterReset:
- ボンバーチャンス/ボンバーゾーンの設定変更・電源断時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。ガックン、液晶表示、ゲーム数挙動等の本機固有の変更判別情報は、検索語・資料系統変更後も確定できない。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると / P-WORLD「SNKプレイモアから完全告知機『スーパーボム』」2007-03-16
   - https://news.p-world.co.jp/articles/2097/greenbelt
   - 2007-04-08納品、BIG約250枚、RB/CB約204枚、BIG後32G/CB後128GのRT高確、RT最大5000G、純増0.6枚/G、RT突入目安約25%/約11%を確認。
   - reliability: INDUSTRY

2. pacnk「スーパーボム 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_supabomu.html
   - 2007年4月導入、設定1〜6のBIG/CB確率、PAYOUT 96〜109%を確認。
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
- 設定変更/据え置き/電源OFF→ON時のRT/CZ状態処理
- 本機固有の設定変更判別

## conflicts

- 現時点で性能コアの明確な数値競合は確認していない。
- 当時業界記事は204枚側を「REG」と表記し、パチマガスロマガ/pacnkは「CB」と表記するため、役名称の表記差を保持する。獲得性能は約204枚で一致。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
