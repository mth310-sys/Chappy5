# スロットチャンネルTV

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: スロットチャンネルTV
manufacturer: アビリット
generation: 5号機初期
releaseDate: 2007-04-01（グリーンべると/P-WORLD当時記事の納品開始日）
systemType: ボーナス + RT

## 性能コア

payoutRateBySetting:

### パチマガスロマガ PAYOUT（シミュレート値）
- 設定1: 97.29%
- 設定2: 100.63%
- 設定5: 103.85%
- 設定6: 107.18%

confidence: ANALYSIS_HIGH

### HAZUSE 当時解析値
- 設定1: 96.1%
- 設定2: 99.2%
- 設定5: 102.1%
- 設定6: 105.1%

confidence: ANALYSIS_SINGLE

- 上記2系統は差が大きいため平均化せずCONFLICTとして双方を保持する。

initialHitBySetting:
- 赤7BIG
  - 設定1: 1/1057.03
  - 設定2: 1/1008.25
  - 設定5: 1/978.15
  - 設定6: 1/936.23
- 青7BIG
  - 設定1: 1/736.36
  - 設定2: 1/655.36
  - 設定5: 1/585.14
  - 設定6: 1/541.62
- REG（黒絵柄）
  - 設定1: 1/1057.03
  - 設定2: 1/1008.25
  - 設定5: 1/978.15
  - 設定6: 1/936.23
- ボーナス合算
  - 設定1: 1/307.68
  - 設定2: 1/284.94
  - 設定5: 1/266.41
  - 設定6: 1/251.10

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 設定1: 約44.81G/1000円
- 設定2: 約45.34G/1000円
- 設定5: 約45.88G/1000円
- 設定6: 約46.93G/1000円
- HAZUSE当時解析の概数は約44G/1000円で、設定1付近と整合する。
- 20円等価の50枚貸しを前提とする当時表記。物差しでは「1000円あたりゲーム数」として原表記を保持する。

confidence: ANALYSIS_HIGH

netIncrease:
- 50GのRT「ゴールデンタイム」を搭載。
- RT純増/Gの比較可能な数値は今回の再探索では確定できずUNVERIFIED。

basicPayout:
- 赤7BIG（ハイパービッグ）: 465枚超払い出し終了 / 純増約380枚
- 青7BIG（ミドルビッグ）: 375枚超払い出し終了 / 純増約310枚 + 50G RT
- REG/黒絵柄（当時業界記事ではスモールビッグ表記）: 130枚超払い出し終了 / 純増約108〜110枚 + 50G RT

confidence: INDUSTRY + ANALYSIS_HIGH

modeSpecificMinimumData:
- 設定は1/2/5/6の4段階。
- 赤7BIGはRT非付与、青7BIGとREG/黒絵柄後に50G RT「ゴールデンタイム」。
- チェリー、スイカ、チャンスベル（ベル・ベル・スイカ）でボーナス同時当選あり。
- パチマガスロマガの「攻め時・ヤメ時」は「特にナシ」で、通常時ゲーム数天井を示す記述は確認できない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「スロットチャンネルTV / スロットチャンネルTV アビリット / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / RT持越し」へ検索語を分岐し、当時HAZUSE、パチマガスロマガ、業界記事を横断したが、本機固有の設定変更時RT状態処理を明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井は確認されず、宵越し天井の比較対象はNONE_CONFIRMED。
- RT中閉店時の据え置き翌日持越し可否は本機固有資料で確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有挙動はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。通常時ゲーム数天井は確認できない。

ceilingAfterReset:
- NONE_CONFIRMED。設定変更時の短縮天井・朝一天井は確認できない。

modeAfterReset:
- 通常時のゲーム数モードや朝一専用モードを示す公開資料は確認できない。

stateAfterReset:
- RT中状態の設定変更/電源断時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。ガックン、表示、ゲーム数挙動等の本機固有の設定変更判別情報は再探索後も確認できない。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると / P-WORLD「出川哲朗の『ヤバイよ!!哲ちゃん』、アビリットから」2007-02-09
   - https://news.p-world.co.jp/articles/2039/greenbelt
   - 納品2007-04-01、3種ボーナス、約380/310/110枚、青7/黒系後50G RT、4段階設定、合算1/307.7〜1/251.1を確認。
   - reliability: INDUSTRY

2. パチマガスロマガ「スロットチャンネルTV ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/h.php
   - 設定別赤7/青7/REG/合算とPAYOUTシミュレート値97.29〜107.18%を確認。
   - reliability: ANALYSIS_HIGH

3. パチマガスロマガ「スロットチャンネルTV 小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/c-1.php
   - 1000円あたり44.81/45.34/45.88/46.93Gを確認。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ「スロットチャンネルTV 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/kyotai.php
   - 赤7 465枚超/約380枚、青7 375枚超/約310枚、REG 130枚超/約108枚を確認。
   - reliability: ANALYSIS_HIGH

5. HAZUSE「スロットチャンネルTV 解析・機種情報(2版)」2007-02-27作成 / 2007-04-26更新
   - https://hazuse.com/i/data/slotTV/top.htm
   - 4段階設定、50G RT、設定別ボーナス確率、機械割96.1/99.2/102.1/105.1%、1000円約44Gを別系統資料として確認。
   - reliability: ANALYSIS_SINGLE

6. パチマガスロマガ「スロットチャンネルTV TOP」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/14/abilit_slot_14.php
   - RT搭載、攻め時・ヤメ時「特にナシ」を確認。
   - reliability: ANALYSIS_HIGH

## missingFields

- RT純増/G
- 設定変更/据え置き/電源OFF→ON時のRT状態処理
- 本機固有の設定変更判別

## conflicts

- 機械割: パチマガスロマガのシミュレート値97.29/100.63/103.85/107.18%に対し、HAZUSE当時解析は96.1/99.2/102.1/105.1%。定義差または解析条件差が疑われるため平均化しない。
- 導入時期表記: HAZUSEページ見出しは「2007年2月」だが、グリーンべると当時記事は納品開始を2007-04-01と明記。本DBはホール実導入基準で2007-04-01を採用し、2月は発表/解析掲載時期として扱う。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
