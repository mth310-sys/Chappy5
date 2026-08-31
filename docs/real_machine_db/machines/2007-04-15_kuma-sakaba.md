# 熊酒場

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 熊酒場
manufacturer: ネット
releaseDate: 2007-04-15（当時業界記事の納品開始予定）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 4段階設定（1・3・5・7）

## 性能コア

payoutRateBySetting:
- 設定1: 98.8%
- 設定3: 100.2%
- 設定5: 104.5%
- 設定7: 108.4%

confidence: ANALYSIS_HIGH

initialHitBySetting:
- 大熊ボーナス(BIG)
  - 設定1: 1/277
  - 設定3: 1/264
  - 設定5: 1/250
  - 設定7: 1/235
- 小熊ボーナス(REG)
  - 設定1: 1/452
  - 設定3: 1/425
  - 設定5: 1/402
  - 設定7: 1/381
- ボーナス合算
  - 設定1: 1/172
  - 設定3: 1/163
  - 設定5: 1/154
  - 設定7: 1/146

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 約33〜35G/1000円（50枚貸し目安）

confidence: INDUSTRY

netIncrease:
- NOT_APPLICABLE（RT/ARTによる通常時の継続増加区間なし）

basicPayout:
- 大熊ボーナス(BIG): 純増約312枚
- 小熊ボーナス(REG): 純増約117枚

confidence: INDUSTRY

modeSpecificMinimumData:
- ネット5号機第2弾。
- 完全告知タイプ。液晶前の扉が開き、提灯点灯でボーナス確定。
- リプレイ、チェリー、枝豆とのボーナス同時抽選あり。
- 設定1・3・5・7の4段階。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機固有の設定変更時内部処理を明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井・モード管理を確認できず、物差し上の主要な据え置き天井要素はNONE_CONFIRMED。
- ボーナス成立状態等の電断処理は本機固有資料で未確認。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有挙動はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。通常時天井を示す公開仕様を確認できず。

ceilingAfterReset:
- NONE_CONFIRMED。短縮天井・朝一天井は確認できず。

modeAfterReset:
- 通常時モード/朝一専用モードを確認できず。

stateAfterReset:
- RT/ART/AT状態は非該当。本機固有の設定変更時状態再抽選資料は未確認。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。「熊酒場」「熊酒場 初代」「ネット 2007」に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/変更判別を組み合わせ、当時業界記事・旧攻略サイト・後年回顧資料を横断したが、本機固有の変更判別を確定できる高信頼資料に到達せず。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. P-WORLD / グリーンべると「ネットから完全告知機『熊酒場』登場」
   - https://news.p-world.co.jp/articles/2101/greenbelt
   - 2007-04-15納品開始予定、設定1/3/5/7、大熊約312枚、小熊約117枚、合算1/172〜1/146、1000円約33〜35Gを確認。
   - reliability: INDUSTRY

2. K-Navi「熊酒場」
   - https://p-kn.com/slot/672/action/538/
   - 設定別BIG/REG/合算、機械割98.8〜108.4%、完全告知仕様を確認。
   - reliability: ANALYSIS_HIGH

3. パチ7 回顧記事
   - https://pachiseven.jp/articles/detail/11261
   - 2007年春、ネット5号機第2弾、ノーマルタイプ、大熊/小熊の2ボーナスを補助確認。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時の本機固有内部処理
- 電源OFF→ON時の本機固有挙動
- 本機固有のガックン等変更判別

## conflicts

- 当時グリーンべると記事は設定7の大熊ボーナスを約1/239とする一方、K-Naviは1/235。平均化せずCONFLICTとして保持。物差し表ではK-Naviの設定別表を採用し、当時記事は端点レンジ照合資料として扱う。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
