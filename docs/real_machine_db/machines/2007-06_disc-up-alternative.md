# ディスクアップオルタナティブ

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ディスクアップオルタナティブ
aliases:
- パチスロディスクアップオルタナティブ
- DISC UP ALTERNATIVE
manufacturer: サミー
releaseDate: 2007-06（DISC UP 25th Anniversary公式系年表。2007-04-11のK-Navi記事は「発売を開始」とする発表記事であり、ホール導入月とは分離して保持）
generation: 5号機初期
systemType: ボーナス + RT / 技術介入 / CZ経由RT

## 性能コア

payoutRateBySetting:
- パチマガスロマガ・シミュレート値: 設定1 96.41% / 設定2 98.69% / 設定3 101.07% / 設定4 103.52% / 設定5 106.18% / 設定6 109.22%
- SLONET/後年整理値: 設定1 94% / 設定2 96% / 設定3 99% / 設定4 101% / 設定5 105% / 設定6 108%

confidence: CONFLICT

note:
- 数値差が大きく、測定条件/攻略条件差の可能性があるため平均しない。パチマガスロマガは「PAYOUT（シミュレート値）」と明記。

initialHitBySetting:
- BIG合成: 設定1 1/546.13 / 設定2 1/508.03 / 設定3 1/474.90 / 設定4 1/445.82 / 設定5 1/417.43 / 設定6 1/387.79
- REG: 設定1 1/963.76 / 設定2 1/949.80 / 設定3 1/897.75 / 設定4 1/840.21 / 設定5 1/799.22 / 設定6 1/753.29
- ボーナス合成: 設定1 1/348.60 / 設定2 1/330.99 / 設定3 1/310.60 / 設定4 1/291.27 / 設定5 1/274.21 / 設定6 1/256.00

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガの精密値とP-WORLD丸め値（BIG 1/546〜1/388、REG 1/964〜1/753、合算1/349〜1/256）が整合。

baseGamesPer50:
- UNVERIFIED

note:
- 「ディスクアップオルタナティブ / パチスロディスクアップオルタナティブ / Sammy / サミー」と「50枚 / 1000円 / 1k / ベース / コイン持ち / ゲーム数」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、SLONET、後年回顧を横断したが、比較可能な明示値を今回確定できずUNVERIFIED。

netIncrease:
- RT「ダンスタイム」: 約+0.9枚/G（後年整理資料）
- 特殊リプレイ成立時: 50G
- 15枚役成立時: 150G

confidence: ANALYSIS_SINGLE

note:
- RTゲーム数はSLONETと後年整理資料で一致。純増約+0.9枚/Gは後年整理資料で確認したが、今回同値の当時系別ソース照合までは取れていない。

basicPayout:
- ハイパーBIG: 約333枚
- ノーマルBIG: 約319枚（別整理資料では333枚表記あり）
- REG: 約54枚

confidence: CONFLICT

note:
- SLONETはハイパーBIG333枚、ノーマルBIG319枚、REG54枚。後年整理資料は同色/異色BIG双方333枚としており、ノーマルBIG獲得枚数はCONFLICT保持。

modeSpecificMinimumData:
- BIG後はCZ相当のハイパーDJタイム/DJタイムを経由。
- DJタイム中、通常リプレイより先に特殊リプレイまたは15枚役を引けばRT「ダンスタイム」へ。
- 特殊リプレイで50G、15枚役で150GのRT。規定G消化またはボーナスで終了。
- RT規定G完走時は再度DJタイムへ。
- ハイパーBIGはRT/DJタイム中のBIG当選時に成立する仕様として当時系解析に記載。
- 通常時ゲーム数天井はなし。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 設定変更時は内部的にDJタイム状態でスタートするとの当時系解析記述を確認。
- 朝一、通常リプレイ成立より先に特殊リプレイまたは15枚役を引いてダンスタイムへ移行した場合、設定変更の可能性が濃厚とされる。

confidence: ANALYSIS_SINGLE

carryOverBehavior:
- 通常時ゲーム数天井は存在しないため、通常時天井ゲーム数の据え置き引継ぎはNOT_APPLICABLE。
- 前日RT/DJタイム状態の据え置き時内部状態/残G引継ぎは、表記揺れ・RT名・据え置き関連語を変えて再探索したが今回UNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみでDJタイム/ダンスタイム内部状態や残Gが維持されるかはUNVERIFIED。
- 電源OFF→ONのみで朝一DJタイム状態になる根拠は今回確認していない。

gameCounterReset:
- 通常時ゲーム数天井なし。NOT_APPLICABLE。

ceilingAfterReset:
- 天井なし。NOT_APPLICABLE。

modeAfterReset:
- 設定変更時は内部DJタイム状態スタートとの解析あり。
- 通常時のゲーム数管理モードや朝一専用ゲーム数モードはNONE_CONFIRMED。

stateAfterReset:
- 設定変更後の内部状態としてDJタイム開始を確認。
- RT残Gや前日RT状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更直後は内部DJタイム状態のため、特殊リプレイ/15枚役を通常リプレイより先に引けばRTへ移行できる朝一恩恵が存在。
- 短縮天井・朝一専用初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 朝一、通常リプレイ成立前に特殊リプレイまたは15枚役からダンスタイムへ移行すれば設定変更の可能性が濃厚。
- 本機固有のリールガックン可否は十分再探索後もUNVERIFIED。

numericResetData:
- 設定変更後DJタイム状態: 確認あり（割合数値なし）
- 短縮天井: NOT_APPLICABLE
- 朝一当選率/RT突入率: 比較可能な公開数値は今回未確認

## sources

取得日: 2026-08-31

1. DISC UP 25th Anniversary Collection — The History of DISC UP
   - https://wave-master.com/ent/du25th/
   - 5号機「パチスロディスクアップオルタナティブ」を2007.06と明記。
   - reliability: OFFICIAL
2. K-Navi 業界ニュース — 2007-04-11「ディスクアップオルタナティブ」の登場
   - https://p-kn.com/topics/news/186/
   - サミーが発売開始、3つのTIME、トランスループ、BIG中技術介入を紹介。発表/発売開始日として保持し、ホール導入月とは分離。
   - reliability: INDUSTRY
3. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/106/h.php
   - 設定別BIG合成/REG/ボーナス合成、PAYOUTシミュレート値。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — ディスクアップオルタナティブ
   - https://www.p-world.co.jp/machine/database/4699
   - 設定別BIG/REG/合算の丸め値を確認。パチマガスロマガ精密値と整合。
   - reliability: INDUSTRY_DB
5. SLONET — ディスクアップオルタナティブ攻略
   - https://slonet.sakura.ne.jp/kouryaku/diskupalu.html
   - BIG/REG/機械割、天井なし、DJタイム/ハイパーDJタイム/ダンスタイム、設定変更後内部DJタイム開始、朝一変更判別。
   - reliability: ANALYSIS_SINGLE
6. K-Navi — ディスクアップオルタナティブ機種情報/解析
   - https://p-kn.com/slot/688/
   - 3つのTIME、CZ/RT構成、技術介入。
   - reliability: ANALYSIS_HIGH
7. K-Navi — 小役確率
   - https://p-kn.com/slot/688/35368/
   - DJタイム/ハイパーDJタイム/RT中のリプレイ状態差を確認。
   - reliability: ANALYSIS_HIGH
8. 後年ディスクアップシリーズ整理
   - https://www.marimo0925.net/pachislot-rekidairanking-discup/
   - 機械割94〜108%、BIG333枚/REG54枚、RT50G/150G、純増約0.9枚/G。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 日単位の全国納品/ホール導入日
- 50枚あたりゲーム数/1000円ベース
- RT純増約0.9枚/Gの当時系別ソース照合
- 設定変更/据え置き/電源OFF→ON時のRT残G・前日状態処理
- 本機固有のガックン可否

## conflicts

- 機械割: パチマガスロマガ・シミュレート値96.41〜109.22%に対し、SLONET/後年整理94〜108%。平均しない。
- ノーマルBIG獲得枚数: SLONET約319枚、後年整理333枚。平均せず双方保持。
- 2007-04-11はK-Naviの発売開始記事。一方、公式系DISC UP年表は2007.06。発表/発売開始とホール導入月の定義差として保持し、DB時系列は2007-06を採用。

## QA note

- 5月残り境界監査から6月へ移行する根拠を確定。
- 性能コアは設定別ボーナス、機械割、RTゲーム数、獲得枚数を取得。50枚ベースとRT純増の当時系二重照合が未完のためPARTIAL。
- resetBehaviorでは設定変更後の内部DJタイム開始と朝一変更判別を取得できた。RT残G/電断/据え置き処理は十分再探索後もUNVERIFIED。
