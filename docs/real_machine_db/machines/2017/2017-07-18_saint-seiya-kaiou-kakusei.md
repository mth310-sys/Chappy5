machineName: パチスロ 聖闘士星矢 海皇覚醒
manufacturer: 三洋物産 / SANYO
releaseDate: 2017-07-18
recordNumber: 1106
generation: 5号機（5.5号機）
systemType: ART / バトル突破型ART→ゲーム数上乗せART
formalModelName: パチスロ聖闘士星矢海皇覚醒KH
certificationNumber: 7S0460
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- SANYO公式2017年製品一覧に「パチスロ 聖闘士星矢 海皇覚醒」を確認。
- パチビー/K-Navi/一撃/HAZUSEでホール導入開始日2017-07-18を照合。
- HAZUSEで型式 `パチスロ聖闘士星矢海皇覚醒KH`、検定番号 `7S0460` を確認。
- 2024年のスマスロ「L聖闘士星矢 海皇覚醒 CUSTOM EDITION」および2019年「海皇覚醒Special」とは別機として分離。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS_HIGH

## payoutRateBySetting
- 設定1: **97.8%**
- 設定2: **98.8%**
- 設定3: **100.8%**
- 設定4: **103.9%**
- 設定5: **107.5%**
- 設定6: **113.1%**
- 一撃、PiDEA X、すろぱちくえすと等で一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### 海将軍激闘（GB）初当たり
- 設定1: **1/376**
- 設定2: **1/362**
- 設定3: **1/344**
- 設定4: **1/324**
- 設定5: **1/299**
- 設定6: **1/275**

### 聖闘士RUSH（SR）初当たり
- 設定1: **1/1311.34**
- 設定2: **1/1263.84**
- 設定3: **1/1137.00**
- 設定4: **1/980.51**
- 設定5: **1/769.01**
- 設定6: **1/683.12**
- 一撃/すろぱちくえすと/複数解析で一致する精密系列をcanonical採用。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定差を含む解析値: **約45.3～45.9G/50枚**。
- 比較用代表値: **約45G/50枚**。
- なな徹の小役解析で45.3～45.9G、PiDEA X/すろぱちくえすとで約45G/50枚を照合。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## netIncrease
- 海将軍激闘 / 聖闘士RUSHとも **約2.0枚/G**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 海将軍激闘: **25G＋バトル**。最大3戦突破で聖闘士RUSHへ。
- 聖闘士RUSH: **100G以上＋α**、ゲーム数上乗せ型ART。
- 聖闘士BONUS: **40G**（ART内疑似ボーナス系）。
- 聖闘士RUSH期待枚数について約1350枚とする解析資料があるが、物差しDBではART最低基本性能を主値とし、期待枚数は補助値扱い。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- GB間ゲーム数天井: **最大999GでGB当選**。
- 内部SPモード時: **最大536G**。
- SRスルー天井: **SR非当選GBが9回連続すると10回目GBでSR確定**。
- 不屈ポイント: 最大50pt、MAX状態でGB当選時は実質SR確定。
- 小宇宙ポイント: 1000pt到達でGB抽選。通常時の全詳細抽選は本DB対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DETAILED_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **GB間天井RESET / SR間天井RESET**。
- **GB抽選状態 / CZ抽選状態 / GBレベル / 不屈ポイントを再抽選**。
- RT状態は設定変更でも引き継ぐ。
- 液晶ステージは **アンドロメダ島**から開始。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きでは **GB間天井 / SR間天井 / GB抽選状態 / CZ抽選状態 / GBレベル / 不屈ポイントを引き継ぐ**。
- 液晶は電源ON/OFF時もアンドロメダ島となるため、ステージだけでは設定変更判別できない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior
- 純電源OFF→ONでは **GB間天井 / SR間天井 / GB抽選状態 / CZ抽選状態 / GBレベル / 不屈ポイント / RT状態を引き継ぐ**。
- 液晶ステージはアンドロメダ島。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き/純電断: **CARRYOVER**。
- 対象はGB間ゲーム数天井とSRスルー天井。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更後も通常GB間天井は最大999G（SPモードなら536G）。
- 「設定変更専用の固定ゲーム数短縮天井」は確認されない。
- ただしモード再抽選によりSPモードが選ばれた場合は結果的に536G天井となるため、固定短縮と混同しない。
reliability: ANALYSIS_HIGH

### modeAfterReset
- GBレベルを再抽選。
- GBレベル振り分け（設定変更時）:
  - 設定1～3: Lv1 **49.2%** / Lv2 **25.0%** / Lv3 **12.5%** / Lv4 **12.5%** / Lv5 **0.8%**。
  - 設定4: Lv1 **47.7%** / Lv2 **24.2%** / Lv3 **12.1%** / Lv4 **14.1%** / Lv5 **1.9%**。
  - 設定5: Lv1 **47.3%** / Lv2 **24.0%** / Lv3 **12.0%** / Lv4 **14.5%** / Lv5 **2.2%**。
  - 設定6: Lv1 **41.5%** / Lv2 **21.1%** / Lv3 **10.6%** / Lv4 **20.1%** / Lv5 **6.5%**。
- 設定変更で内部モードも再抽選、据え置き/純電断では引継ぎとする解析資料が一致。
reliability: ANALYSIS_HIGH

### stateAfterReset
- GB抽選状態: **低確50.0% / 高確50.0%**。
- CZ抽選状態: **低確50.0% / 高確ショート46.9%（別資料46.88%） / 高確ロング3.1%（別資料3.13%）**。
- 小数差は丸め差として保持し、CONFLICT扱いしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時はGBレベル再抽選により、設定1～3でも **Lv2以上が約50.8%**。
- 不屈ポイントは設定変更時に再抽選され、**30pt以上スタートが43%以上**。
- GB抽選状態は50%で高確、CZ抽選状態も約50%で高確系スタート。
- これらが主な朝一リセット恩恵。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日のGB間ゲーム数、SRスルー回数、GBレベル、不屈ポイント等の有利な蓄積が設定変更で失われる可能性がある。
- 一方で再抽選恩恵が強いため、単純な一方向の不利とは評価しない。
reliability: ANALYSIS_HIGH

### resetDetection
- 設定変更時も電源ON/OFF時も液晶はアンドロメダ島となるため、**朝一ステージ単独では変更判別不可**。
- GB間/SR間天井、GBレベル、不屈ポイント等は設定変更で再抽選・据え置きで引継ぎだが、朝一時点の単発観測で確定判別できるとはしない。
- 本機固有の確定的ガックン契約は、機種名/型式/メーカーと「ガックン」「設定変更」「朝一」「据え置き」で再探索したが、高信頼な確定契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- GB抽選状態: **低確50.0% / 高確50.0%**。
- CZ抽選状態: **低確50.0% / 高確ショート46.88～46.9% / 高確ロング3.13～3.1%**。
- GBレベル: 設定別全振り分けを `modeAfterReset` に保存。
- 不屈ポイント: **30pt以上スタート43%以上**、0pt **14.1%**、49pt **1.6%**を確認。中間pt個別振り分けは現行表示資料では表構造欠落があるため推測補完しない。
- settingChangeCeiling: **999G（SPモード時536G）**。設定変更専用固定短縮なし。
- publishedMorningHitRate: 朝一○G以内の固定当選率として信頼できる公表値は **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- SR初当たりについて、みんスロに設定4 **1/1059** / 設定5 **1/879** / 設定6 **1/800** の系列が掲載される一方、一撃/すろぱちくえすと/複数解析は **1/980.51 / 1/769.01 / 1/683.12** で一致。平均せず後者をcanonicalとし、前者を **CONFLICT_OUTLIER_SECONDARY_SOURCE** として保持。
- CZ高確振り分けの46.9/3.1%と46.88/3.13%は丸め精度差でありmaterial conflictではない。

## missingFields
- deterministic machine-specific gakkun/change-detection contract: UNVERIFIED_AFTER_RESEARCH。
- full individual reset 不屈pt distribution for 5/10/20/30/40/45pt: source table rendering incomplete; not guessed。

## sources
取得日: 2026-09-09
1. SANYO公式パチスロ製品一覧 — https://www.sanyobussan.co.jp/products/slot.html
   - 2017年製品として本機を確認。
   - reliability: OFFICIAL
2. HAZUSE — https://hazuse.com/machine/pachislot/7S0460/
   - 型式 `パチスロ聖闘士星矢海皇覚醒KH`、検定番号 `7S0460`、導入2017-07-18。
   - reliability: ANALYSIS_HIGH
3. パチビー — https://www.pachibee.jp/machines/index/217060007
   - 導入2017-07-18、ART純増約2.0枚/G、GB25G+バトル、SR100G以上+α。
   - reliability: ANALYSIS_HIGH
4. PiDEA X — https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E8%81%96%E9%97%98%E5%A3%AB%E6%98%9F%E7%9F%A2%E6%B5%B7%E7%9A%87%E8%A6%9A%E9%86%92%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 2017-07-07機械評価記事、納品7/17～、設定別GB初当たり/機械割、45G/50枚、天井999G。
   - reliability: INDUSTRY
5. 一撃（5号機版） — https://1geki.jp/slot/s_seiya_kaiou/
   - 設定別GB/SR初当たり、機械割、純増約2.0枚/G。
   - reliability: ANALYSIS_HIGH
6. 一撃 天井/朝一 — https://1geki.jp/slot/s_seiya_kaiou/3/
   - GB999G/SP536G、SR10回目天井、設定変更/据え置きの天井・状態・モード・不屈挙動、朝一状態振り分け。
   - reliability: ANALYSIS_HIGH
7. なな徹 朝イチ/設定変更 — https://nana-press.com/kaiseki/machine/37/641/
   - 設定変更/電源ON-OFF契約、GB/CZ状態、GBレベル全設定振り分け、不屈30pt以上43%以上。
   - reliability: ANALYSIS_HIGH
8. なな徹 小役確率 — https://nana-press.com/kaiseki/machine/37/644/
   - 50枚あたり約45.3～45.9G。
   - reliability: ANALYSIS_HIGH
9. すろぱちくえすと — https://www.slopachi-quest.com/article/seiya-poseidon/
   - 2017-07-18、5.5号機、約45G/50枚、設定別GB/SR/機械割、天井群。
   - reliability: ANALYSIS_HIGH
10. みんスロ — https://minslo.com/%E8%81%96%E9%97%98%E5%A3%AB%E6%98%9F%E7%9F%A2-%E6%B5%B7%E7%9A%87%E8%A6%9A%E9%86%92/
   - 約45G/50枚等。SR初当たり設定4～6に他資料と競合する値あり、競合検知用として保持。
   - reliability: ANALYSIS_SINGLE

## researchNotes
- 初代5号機版、2019年Special、2024年CUSTOM EDITIONが検索上混在するため、2017年型式KH/検定7S0460を軸に分離した。
- resetBehaviorは朝一客行動・ホール設定変更判断へ直接影響するGB/SR天井、GBレベル、不屈、内部高確のみ保存し、通常時の全モード移行・全抽選テーブルは収集していない。
