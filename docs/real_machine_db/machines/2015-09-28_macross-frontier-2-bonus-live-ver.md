# パチスロ マクロスフロンティア2 Bonus Live ver.

machineName: パチスロ マクロスフロンティア2 Bonus Live ver.
manufacturer: SANKYO
releaseDate: 2015-09-28（K-Naviのホール導入開始日。SANKYO公式は2015.09、業界記事は最短納品2015-09-27。後年解析に2015-10-05導入表記もあるため工程差として分離）
generation: 5号機
systemType: A+ART / CZ / ゲーム数上乗せ型ART

## payoutRateBySetting

パチマガスロマガ掲載値。5号機クロニクルでも同値を確認。
- 設定1: 97.2%
- 設定2: 98.5%
- 設定3: 100.5%
- 設定4: 103.7%
- 設定5: 107.8%
- 設定6: 112.1%

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合成
- 設定1: 1/278
- 設定2: 1/273
- 設定3: 1/266
- 設定4: 1/261
- 設定5: 1/255
- 設定6: 1/250

### ART初当り
- 設定1: 1/380
- 設定2: 1/359
- 設定3: 1/339
- 設定4: 1/321
- 設定5: 1/280
- 設定6: 1/252

### ボーナス+ART
- 設定1: 1/161
- 設定2: 1/155
- 設定3: 1/149
- 設定4: 1/144
- 設定5: 1/133
- 設定6: 1/125

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- 約33G/50枚として当時解析系で確認。
- exact値は資料定義差を避けて概数保持。

信頼度: ANALYSIS

## netIncrease

- ART「バルキリータイム」: 約1.5枚/G
- 1セット40G以上、ゲーム数上乗せ型。

信頼度: OFFICIAL_AND_ANALYSIS_HIGH

## basicPayout

SANKYO公式オンライン博物館。
- 究極クランボーナス: 204枚
- アルトボーナス: 204枚
- シェリルボーナス: 120枚
- ランカボーナス: 120枚

信頼度: OFFICIAL

## modeSpecificMinimumData

- A+ART機。通常時は低確 / 高確 / 超高確の内部状態を持つ。
- 規定ゲーム数ART抽選用に通常A / 通常B / 通常C / 天国のテーブルが存在。
- CZはバジュラアタック（ART期待度約25%）とデカルチャンス（約50%）。
- 通常時のRT状態はA/Bがあり、設定変更・ボーナス後はRT状態Aスタート。
- 天井: ボーナス間999GでART確定。ARTを挟んでもボーナス間カウントは継続する。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: COMPLETE_WITH_UNVERIFIED_CARRYOVER_CEILING

- settingChangeBehavior: 天井用ゲーム数はリセット。ARTテーブルを再抽選。内部状態も設定別に再抽選。RT状態Aスタートを解析資料で確認。
- carryOverBehavior: ARTテーブルは引き継ぐ。天井について当時整理資料は「調査中」としており、据え置き時の天井ゲーム数契約は推測で固定しない。
- powerCycleBehavior: 電源OFF→ONで液晶表示ゲーム数は0Gになるが、設定変更しない限り内部ゲーム数は引き継ぐとの当時解析記述あり。ARTテーブルは引き継ぎ。
- gameCounterReset: 設定変更時は天井Gリセット。純電断では液晶G数のみ0表示、内部G数は引き継ぎ。単純据え置き時天井欄の直接表記は資料上「調査中」のため別扱い。
- ceilingAfterReset: 通常天井はボーナス間999G→ART。設定変更専用短縮天井は確認できず。
- modeAfterReset: 設定変更時ARTテーブル再抽選。A/B/C/天国のうち公開された変更時振り分けは A/B中心＋天国1.0〜2.0%、Cは確認資料で0扱い。
- stateAfterReset: 設定変更時の低確/高確/超高確振り分けは公開値あり（下記）。
- advantageousSectionReset: NOT_APPLICABLE_5TH_GEN_PRE_5_9
- resetBenefits: 設定変更時は高確・超高確スタート振り分けがあり、設定が高いほど上位状態比率が上昇。専用短縮天井は確認できず。
- resetPenalties: 設定変更固有の主要不利要素は確認できず。
- resetDetection: 電源OFF→ONだけでも液晶G数が0Gになるため0G表示単独では設定変更判別不可。ゾロ目以外の液晶G数で前兆→ARTなら内部G数とのズレから据え置き濃厚とする当時解析あり。ただし確定判別ではない。
- numericResetData:
  - 設定1: 低確60% / 高確30% / 超高確10%
  - 設定2: 低確56% / 高確32% / 超高確12%
  - 設定3: 低確52% / 高確34% / 超高確14%
  - 設定4: 低確48% / 高確36% / 超高確16%
  - 設定5: 低確44% / 高確38% / 超高確18%
  - 設定6: 低確40% / 高確40% / 超高確20%
  - 設定変更時テーブル: 設定1〜4 A49.50% / B49.50% / 天国1.00%、設定5 A49.25% / B49.25% / 天国1.50%、設定6 A49.00% / B49.00% / 天国2.00%。

### resetBehavior QAメモ

設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 液晶G数 / 内部G数 / 状態 / テーブルを組み替えて、当時解析、旧攻略DB、メーカー公式、業界記事を横断。設定変更の天井リセット、ARTテーブル再抽選、状態振り分け、電断時の液晶0Gと内部G数継続は複数資料系統で整合。いっぽう据え置き時の天井欄を直接「引き継ぎ」と断定した同等品質の表は今回固定できず、当時資料の「調査中」を尊重してUNVERIFIEDを残す。

## releaseDateNotes

- SANKYO公式: 導入年月 2015.09。
- K-Navi: ホール導入開始 2015-09-28。
- グリーンべると/P-WORLD業界記事: 2015-09-07発表、最短納品2015-09-27予定。
- ちょんぼりすた: 2015-10-05より導入。
- 本DBでは09-28をcanonical chronological dateとし、10-05表記は全国/通常導入側の工程差 `DATE_EVENT_DIFFERENCE` として保持。単純CONFLICTにはしない。

## sources

取得日: 2026-09-08

1. SANKYOオンライン博物館 — パチスロ マクロスフロンティア2 Bonus Live ver.
   - https://www.sankyo-fever.jp/collection/619/
   - 2015.09、A+ART、各ボーナス獲得枚数、ART約1.5枚/G
   - reliability: OFFICIAL
2. パチマガスロマガ — ボーナス確率 / ART初当り / PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/h.php
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役/RT状態
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/c.php
   - 設定変更・ボーナス後RT状態A
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 状態移行抽選
   - https://p.hisshobon.jp/machine/2629/1/54181
   - 設定変更時の低確/高確/超高確振り分け
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — 完全解析
   - https://chonborista.com/slot/sankyo-slot/10836/
   - 天井、朝一/リセット、電断液晶G数、ARTテーブル、変更時状態/テーブル数値、2015-10-05表記
   - reliability: ANALYSIS
6. すろぱちくえすと — 朝一設定変更・リセット
   - https://www.slopachi-quest.com/article/macross2-blv-reset/
   - 設定変更/据え置き表、状態振り分け
   - reliability: ANALYSIS
7. K-Navi — 機種情報
   - https://p-kn.com/slot/2321/odds/
   - ホール導入開始2015-09-28
   - reliability: ANALYSIS_ARCHIVE
8. グリーンべると/P-WORLD業界ニュース — 2015-09-07
   - https://news.p-world.co.jp/articles/7774/greenbelt
   - 発表、最短納品2015-09-27予定、A+ART、ART約1.5枚/G
   - reliability: INDUSTRY
9. P-WORLD機種DB
   - https://www.p-world.co.jp/machine/database/7807
   - 5号機/A+ART、天井、ART仕様
   - reliability: INDUSTRY_DB

## missingFields

- 据え置き時天井ゲーム数契約を直接固定する高信頼表（当時資料では調査中）
- 型式名/検定番号の一次または高信頼固定資料

## conflicts

- release date: 2015-09-28ホール導入開始と2015-10-05導入表記は、最短納品09-27・公式2015.09と合わせ、地域先行/通常導入の工程差 `DATE_EVENT_DIFFERENCE_2015_09_28_VS_2015_10_05` として保持。
- 5号機クロニクルの別スペック欄には本機と整合しない数値混在が見られるため、機械割一致部分以外はcanonical performanceに採用しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_UNVERIFIED_CARRYOVER_CEILING
