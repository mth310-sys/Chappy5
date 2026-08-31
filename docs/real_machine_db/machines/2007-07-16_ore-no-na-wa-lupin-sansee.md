# 俺の名はルパン三世

machineName: 俺の名はルパン三世
manufacturer: 平和 / オリンピア（同一機種の共同販売・パネル違い）
releaseDate: 2007-07-16
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence

- グリーンべると2007-06-25記事で、平和とオリンピアが合同発表し、納品は `2007-07-16から予定` と明記。
- P-WORLDでは導入開始を2007年7月、型式名 `俺の名はルパン三世P`、検定番号 `7S0061` と掲載。
- 平和HEIWA BROS側ルパンパネルとオリンピア側次元パネル等は同一性能機のパネル違いとして扱い、本DBでは二重計上しない。

信頼度: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting

P-WORLD:

| 設定 | 機械割 |
|---|---:|
| 1 | 94.9% |
| 2 | 97.5% |
| 3 | 101.5% |
| 4 | 103.4% |
| 5 | 105.2% |
| 6 | 107.0% |

- K-Navi / パチスロ救急車では設定1のみ `95.0%` 表記、設定2〜6は一致。設定1の0.1pt差は丸め差として併記する。
- 物差し本線はP-WORLDの `94.9〜107.0%` を採用。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

P-WORLDとK-Naviで一致（丸め精度差のみ）。

| 設定 | S-BIG | N-BIG | BIG合算 | REG | ボーナス合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/668.7 | 1/668.7 | 1/334.4 | 1/668.7 | 1/222.9 |
| 2 | 1/642.5 | 1/642.5 | 1/321.3 | 1/636.3 | 1/213.5 |
| 3 | 1/618.3 | 1/618.3 | 1/309.1 | 1/618.3 | 1/206.1 |
| 4 | 1/595.8 | 1/595.8 | 1/297.9 | 1/595.8 | 1/198.6 |
| 5 | 1/574.9 | 1/574.9 | 1/287.4 | 1/579.9 | 1/192.2 |
| 6 | 1/555.4 | 1/555.4 | 1/277.7 | 1/560.1 | 1/185.7 |

- P-WORLDの整数表示ではS/N BIG `1/668→1/555`、REG `1/668→1/560`。
- K-Navi本文の合算表には設定番号並びの表示崩れがあるため、整合するP-WORLD値とBIG/REGから検算した並びを採用。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- 2007-06-25グリーンべると記事で1000円あたり約 `36〜38G`、設定差ありと明記。
- 50枚貸し前提の比較値としてそのまま `約36〜38G/50枚` を保持。

信頼度: INDUSTRY

## netIncrease

- S-BIG後100G、REG後50GのRT。
- グリーンべるとはRTを `現状維持程度` と表現。
- パチスロ救急車は `微減`、K-Naviの当時ユーザーレビューにもRT中にコインが減るとの記録がある。
- 数値化された1G純増は今回確認できず、物差し値は `0枚/G付近（現状維持〜微減）` と定性的に保持。平均・推定値は作らない。

信頼度: INDUSTRY（現状維持程度） / CONFLICT（現状維持 vs 微減の表現）

## basicPayout

- S-BIG: 約300枚 + RT100G。
- N-BIG: 約300枚、RTなし。
- REG: 約150枚 + RT50G。
- K-NaviではS/N BIGとも348枚超払い出しで終了、REGは168枚超払い出しで終了。
- グリーンべると/P-WORLD/中古実機資料で基本獲得性能を照合。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

### RT

- S-BIG終了後: 100G。
- REG終了後: 50G。
- N-BIG終了後: RTなし。
- ボーナス成立でRT終了。
- RTは出玉増加型ではなく、当時業界発表上は現状維持程度。

### 天井

- パチスロ救急車の機種紹介では `天井なし` と明記。
- P-WORLD/K-Naviの基本仕様にも通常時ゲーム数天井は掲載されない。
- 本DBでは通常時天井 `NONE_CONFIRMED / 実質なし` と扱い、リセット時短縮天井等はNOT_APPLICABLE寄りのNONE_CONFIRMEDとする。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `俺の名はルパン三世 / 俺の名はルパン三世P / 平和 / オリンピア / HEIWABROS` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 天井 / ガックン` を組み替え、業界記事、P-WORLD、K-Navi、旧攻略資料、古いDB、後年資料を横断。
- 設定変更時にS-BIG後/REG後RTの残GやRT内部状態をどう処理するかの本機固有確定資料は今回UNVERIFIED。

carryOverBehavior:
- 据え置き時のRT残G・RT内部状態の引継ぎについて、本機固有の高信頼確定資料はUNVERIFIED。
- 通常時ゲーム数天井は確認されないため、通常時天井ゲーム数の引継ぎ問題はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のRT残G/内部状態処理はUNVERIFIED。

 gameCounterReset:
- 通常時ゲーム数天井は確認されず、天井カウンタのリセット/引継ぎはNOT_APPLICABLE寄りのNONE_CONFIRMED。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一天井はNONE_CONFIRMED。

modeAfterReset:
- 通常時のゲーム数モード/朝一専用モード/設定変更専用モードはNONE_CONFIRMED。

stateAfterReset:
- ボーナス後RT中に設定変更・電断した場合のRT状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更時の天井短縮、朝一RT、専用モード等の確定恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、液晶表示、RT挙動等による確定的な設定変更/据え置き判別情報は、検索語・資料系統変更後もUNVERIFIED。
- 後年ルパンシリーズの変更判別情報は本機へ流用していない。

numericResetData:
- 設定変更時モード振り分け、朝一当選率、短縮G数、変更時RT突入率など比較可能な公開数値は今回UNVERIFIED。

## sources

取得日: 2026-08-31

1. グリーンべると — パチスロ『ルパン』シリーズの最新作発表
   - https://web-greenbelt.jp/00004178/
   - 2007-06-25、納品2007-07-16予定、SBB/NBB各約300枚、SBB後100G RT、RB後50G RT、1000円約36〜38G
   - reliability: INDUSTRY
2. P-WORLD — 俺の名はルパン三世
   - https://www.p-world.co.jp/machine/database/4814
   - 型式、導入月、設定別S-BIG/N-BIG/REG/合算、機械割、基本獲得性能、RT
   - reliability: ANALYSIS_HIGH
3. K-Navi — 俺の名はルパン三世
   - https://p-kn.com/slot/611/
   - 設定別S-BIG/N-BIG/REG、機械割、払い出し終了条件、RT構造
   - reliability: ANALYSIS_HIGH
4. パチスロ救急車 — 俺の名はルパン三世 完全攻略情報
   - https://www.eightbeat.com/slot99/kishu/a_gyou/o/orenonaLupin3/page_menu.html
   - 天井なし、RT100G/50G、RT微減、設定別BIG/REG/合算/機械割
   - reliability: ANALYSIS_SINGLE
5. P-WORLD業界ニュース（グリーンべると転載）
   - https://news.p-world.co.jp/articles/2262/greenbelt
   - 発表・納品予定・基本仕様を別URLで再確認
   - reliability: INDUSTRY
6. 中一商事 中古実機資料 — 俺の名はルパン三世
   - https://www.nakaiti.com/html/sOlympia20070717.html
   - 型式名、SBB約300枚+RT100G、NBB約300枚、REG約150枚+RT50G
   - reliability: RETROSPECTIVE_SUPPORT
7. ルパン三世Wiki — 俺の名はルパン三世
   - https://lupin.fandom.com/ja/wiki/%E4%BF%BA%E3%81%AE%E5%90%8D%E3%81%AF%E3%83%AB%E3%83%91%E3%83%B3%E4%B8%89%E4%B8%96
   - 平和HEIWA BROSルパンパネル/オリンピア次元パネルが同一機種の販売形態であることの補助確認
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- RT中の設定変更時の残G/内部RT状態処理
- 据え置き時のRT残G/内部RT状態引継ぎ
- 電源OFF→ONのみのRT内部状態処理
- RTの数値化された1Gあたり純増/減少値
- 本機固有のガックン/設定変更判別
- 設定変更時の公開朝一数値

## conflicts

1. RT増減表現: 当時業界記事 `現状維持程度` に対し旧攻略資料 `微減`。数値平均は行わない。
2. 設定1機械割: P-WORLD `94.9%`、K-Navi/旧攻略 `95.0%`。丸め差として双方保持。

## notes

- HEIWA BROSルパンパネル、オリンピア次元パネル、後発パネルは同一性能機のパネル違いとして1レコードに統合し、全機種収集件数を水増ししない。
- 後年の別ルパン機（消されたルパン、ロイヤルロード、世界解剖、6号機、スマスロ）のresetBehaviorは本機へ流用しない。
