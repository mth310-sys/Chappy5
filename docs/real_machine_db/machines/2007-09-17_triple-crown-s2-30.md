# トリプルクラウンS2-30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: トリプルクラウンS2-30
aliases:
- トリプルクラウンS2－30
- Triple Crown S2-30
manufacturer: 清龍ゲームジャパン
releaseDate: 2007-09-17（当時グリーンべると/P-WORLD業界記事の納品開始日を時系列本線とする。後年一覧には2007-10導入表記もあるため月表記差はCONFLICTとして保持）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 30Φ沖スロ

## 性能コア

payoutRateBySetting:
- パチマガスロマガ PAYOUT（シミュレート値）: 設定1 95.80% / 設定2 98.54% / 設定3 101.29% / 設定4 104.02% / 設定5 106.77% / 設定6 109.50%
- 後年メーカー由来整理: 設定1 95.47% / 設定2 98.44% / 設定3 101.38% / 設定4 104.29% / 設定5 107.19% / 設定6 110.06%

confidence: CONFLICT

note:
- 両系列は設定1〜6で近いが一致しないため平均しない。
- 当時業界記事は旧5号機版トリプルクラウンより「ボーナス確率、出玉率をアップされたスペック上位機」と明記。

initialHitBySetting:
- BIG: 設定1 1/312.08 / 設定2 1/296.54 / 設定3 1/282.48 / 設定4 1/269.70 / 設定5 1/258.02 / 設定6 1/247.31
- BG: 設定1 1/504.12 / 設定2 1/464.79 / 設定3 1/431.16 / 設定4 1/402.06 / 設定5 1/376.64 / 設定6 1/354.25
- ボーナス合算: 設定1 1/192.75 / 設定2 1/181.04 / 設定3 1/170.67 / 設定4 1/161.42 / 設定5 1/153.12 / 設定6 1/145.64

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガのボーナス抽選確率と後年メーカー由来整理でほぼ一致。

baseGamesPer50:
- 設定1 37.55G
- 設定2 37.90G
- 設定3 38.25G
- 設定4 38.61G
- 設定5 38.98G
- 設定6 39.35G

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガの通常時小役ページに1000円あたりゲーム数として直接掲載。

netIncrease:
- NOT_APPLICABLE（ノーマルタイプ。RT/ART/AT非搭載）

basicPayout:
- BIG: 規定払い出し345枚超で終了 / 純増約312枚
- BG: 規定払い出し105枚超で終了 / 純増約104枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 30Φ仕様の完全告知ノーマル。
- リール枠左側のバット型ランプ点灯でボーナス告知。
- 旧トリプルクラウン-30のパワーアップ版で、ボーナス確率・出玉率を引き上げた上位スペック。
- スタート無音などのプレミア告知を搭載。
- 通常時天井、AT/ART/RT/CZ、ゲーム数管理モードは確認されない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- パチマガスロマガ機種トップでは「攻め時・ヤメ時・設定変更時→特にナシ」と掲載。
- 通常時天井・AT/ART/RT/CZ・ゲーム数管理モードを持たないため、設定変更専用の天井短縮・朝一AT/CZ恩恵はNOT_APPLICABLE / NONE_CONFIRMED。
- 設定変更時の成立済みボーナス、リール初動など本機固有の内部処理はUNVERIFIED。

carryOverBehavior:
- 通常時天井ゲーム数・モード・RT/ART状態の据え置き引継ぎはNOT_APPLICABLE。
- 本機固有の据え置き判別挙動はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで変化する天井ゲーム数・モード・RT/ART状態はNOT_APPLICABLE。
- 成立済みボーナスやリール挙動等の電断固有処理はUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井なし。NOT_APPLICABLE。

ceilingAfterReset:
- 天井なし。NOT_APPLICABLE。

modeAfterReset:
- 通常時ゲーム数管理モード/朝一専用モードはNONE_CONFIRMED / NOT_APPLICABLE。

stateAfterReset:
- RT/ART/CZ等の状態管理はNOT_APPLICABLE。
- ボーナス成立状態等の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一モード、初当たり/CZ優遇、公開朝一恩恵数値はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要な不利要素はNONE_CONFIRMED。

resetDetection:
- `トリプルクラウンS2-30 / トリプルクラウンS2 / 清龍ゲームジャパン / 清龍` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 出目 / 告知ランプ` を組み替え、当時解析・業界記事・旧DB・後年回顧資料を横断したが、本機固有のガックン・初期出目・告知ランプによる変更判別はUNVERIFIED。

numericResetData:
- 短縮天井: NOT_APPLICABLE
- 設定変更時モード振り分け: NOT_APPLICABLE / NONE_CONFIRMED
- 朝一当選率・リセット恩恵発生率: 比較可能な公開数値は今回未確認

## sources

取得日: 2026-09-01

1. P-WORLD / グリーンべると（2007-08-24） — 『トリプルクラウン』の清龍から全国発売第1弾
   - https://news.p-world.co.jp/articles/2349/greenbelt
   - 2007-08-20発表、旧5号機版よりボーナス確率・出玉率アップ、納品は2007-09-17より。
   - reliability: INDUSTRY
2. パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/03/seiryu_slot_03.php
   - ノーマル/完全告知、設定変更時「特にナシ」。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/03/a.php
   - 旧トリプルクラウン30のパワーアップ版、BIG約312枚/BG約104枚。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/03/h.php
   - 設定別BIG/BG/合算、PAYOUTシミュレート95.80〜109.50%。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役確率・通常時
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/03/c.php
   - 1000円あたり37.55〜39.35G。
   - reliability: ANALYSIS_HIGH
6. 清龍ゲームジャパン検定通過整理
   - https://q-and-a.hatenablog.com/entry/2016/10/21/095330
   - 2007-08-06にトリプルクラウンS2-30とクレイジージョーカーが検定通過。旧トリプルクラウン-30は2007-05-10で別型式。
   - reliability: ANALYSIS_SINGLE
7. 後年メーカー由来スペック整理
   - https://pachinko.hatenablog.jp/entry/2007/09/tripleCrownS2-30
   - 2007.09、ノーマル、出玉率95.47〜110.06%、設定別BIG/BG/合算。
   - reliability: ANALYSIS_SINGLE
8. 5号機クロニクル — 清龍ゲームジャパン一覧
   - https://5goki.com/seiryu
   - 旧トリプルクラウン30、クレイジージョーカー、トリプルクラウンS2-30を独立機種として掲載。
   - reliability: ANALYSIS_SINGLE
9. トリプルクラウン回顧資料
   - https://taniado.com/triplecrown
   - S2-30を2007年10月機として整理、設定6合成約1/145・機械割110%over、無音演出等を記載。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時の成立済みボーナス等の内部処理
- 据え置き/電源OFF→ONのみでの本機固有挙動
- 本機固有のガックン/変更判別
- 公開朝一専用数値

## conflicts

- 導入時期: 当時グリーンべるとは2007-09-17納品開始、後年の複数一覧は2007-10導入。時系列本線は具体的な当時納品日を採用し、月表記差はCONFLICTとして保持。
- 機械割: パチマガスロマガのPAYOUTシミュレート95.80〜109.50%に対し、後年メーカー由来整理は95.47〜110.06%。平均しない。
