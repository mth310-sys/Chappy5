# 熊酒場

status: COMPLETE_CORE
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

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

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 本機固有の設定変更時内部処理を直接記載した高信頼資料は、今回の再探索でも確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井・AT/ARTモードは非搭載/非該当のため、設定変更によるそれらのRESET項目はない。
- ボーナス成立済み状態・告知待ち状態を設定変更した場合の機種固有処理は資料不足のため推測補完しない。

### carryOverBehavior
- 通常時ゲーム数天井・通常時モード管理を示す公開仕様は確認できず、物差し上の主要な据え置き天井/モード要素は `NOT_APPLICABLE / NONE_CONFIRMED`。
- ボーナス成立済み状態・最大3Gの告知待ち挙動が営業跨ぎでどう扱われるかは本機固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONのみと設定変更を区別した本機固有のボーナス成立状態/告知状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機ノーマル機の挙動からCARRY_OVER/RESETを推定しない。

### gameCounterReset
- `NOT_APPLICABLE_TO_NORMAL_CEILING`。
- 通常時ゲーム数天井を示す当時仕様を確認できず、朝一ゲーム数による天井狙い要素は確認されない。

### ceilingAfterReset
- `NONE_CONFIRMED / NOT_APPLICABLE`。
- 設定変更専用の短縮天井・朝一天井は、当時業界記事、K-Navi、旧DB、後年回顧資料を再探索しても確認できず。

### modeAfterReset
- 通常時のゲーム数モード/朝一専用モードは `NONE_CONFIRMED`。
- ボーナス後50G以内の再当選でプレミアムBGMが流れる仕様は当時業界記事で確認できるが、これは内部高確/朝一モードではなく演出条件として扱う。

### stateAfterReset
- RT/ART/AT状態は非該当。
- 本機固有の設定変更時状態再抽選契約は確認できず。
- ボーナス成立後はリプレイ確率が上がると当時業界記事にあるが、成立済みボーナス状態の設定変更/純電断処理は未確認のため一般則で補完しない。

### advantageousSectionReset
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用短縮天井、朝一専用モード、設定変更後だけの当選率優遇等は確認できない。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、扉/提灯状態、液晶表示等による変更判別を確定できる高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。
- `熊酒場 / 初代熊酒場 / ネット 2007` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール / 変更判別 / 天井 / ボーナス成立` を組み替えて再探索したが、機種固有契約に到達せず。

### numericResetData / publicMorningNumbers
- 通常時天井: NOT_APPLICABLE / NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 設定変更時のみ適用される主要初当たり/CZ数値: NONE_CONFIRMED

## resetBehavior 再探索メモ
2026-09-11。メーカー/機種名の表記揺れ（`熊酒場 / 初代熊酒場 / NET 熊酒場 / ネット 熊酒場`）と `設定変更 / リセット / 朝一 / 据え置き / 電源 / 電断 / ガックン / 変更判別 / 天井 / ボーナス成立 / 告知` を組み替え、2007年当時のグリーンべると/P-WORLD、K-Navi、5号機系DB、旧攻略・回顧記事を再探索。通常時天井・朝一専用モード等が確認できないこと、有利区間非該当までは固定できる。一方、設定変更/据え置き/純電断時の成立済みボーナス・告知待ち状態、本機固有ガックン等は直接資料を固定できないため、一般的5号機ノーマル機の挙動から補完せず `PARTIAL_RESEARCH_EXHAUSTED` とする。性能コアの `COMPLETE_CORE` は維持する。

## sources

取得日: 2026-09-11（性能コア原資料は2026-08-31取得、resetBehavior再探索を2026-09-11実施）

1. P-WORLD / グリーンべると「ネットから完全告知機『熊酒場』登場」
   - https://news.p-world.co.jp/articles/2101/greenbelt
   - 2007-04-15納品開始予定、設定1/3/5/7、大熊約312枚、小熊約117枚、合算1/172〜1/146、1000円約33〜35Gを確認。
   - ボーナス成立後のリプレイ確率上昇、告知タイミング最大3G、ボーナス後50G以内再当選時のプレミアムBGMも確認。
   - setting change / power-cycleの機種固有契約は記事に記載なし。
   - reliability: INDUSTRY

2. K-Navi「熊酒場」
   - https://p-kn.com/slot/672/action/538/
   - 設定別BIG/REG/合算、機械割98.8〜108.4%、完全告知仕様を確認。
   - 攻略/演出ページも再探索したが設定変更・据え置き・純電断の固有契約は確認できず。
   - reliability: ANALYSIS_HIGH

3. パチ7 回顧記事
   - https://pachiseven.jp/articles/detail/11261
   - 2007年春、ネット5号機第2弾、ノーマルタイプ、大熊/小熊の2ボーナスを補助確認。
   - reliability: ANALYSIS_SINGLE

4. 5号機クロニクル ネット機種一覧
   - https://5goki.com/net
   - 初代熊酒場と後継機の世代/系統照合に使用。resetBehavior固有契約は固定できず。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時の成立済みボーナス/告知待ち状態の本機固有処理
- 据え置き/純電源OFF→ON時の成立済みボーナス/告知状態の本機固有処理
- 本機固有のガックン/初期出目等変更判別

## conflicts

- 当時グリーンべると記事は設定7の大熊ボーナスを約1/239とする一方、K-Naviは1/235。平均化せずCONFLICTとして保持。物差し表ではK-Naviの設定別表を採用し、当時記事は端点レンジ照合資料として扱う。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
