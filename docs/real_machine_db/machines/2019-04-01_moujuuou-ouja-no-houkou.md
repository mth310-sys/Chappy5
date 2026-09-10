# No.1274 パチスロ猛獣王 王者の咆哮

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ猛獣王 王者の咆哮
- manufacturer: Sammy
- releaseDateCanonical: 2019-04-01
- generation: 6号機
- systemType: AT / 規定ゲーム数 + CZ / 色目押しAT
- formalModelNameCanonical: `S猛獣王 王者の咆哮ZZ`
- certificationNumber: `8S1172`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | AT「サバンナチャンス」初当たり | 機械割 |
|---:|---:|---:|
| 1 | 1/356.0 | 97.8% |
| 2 | 1/341.4 | 98.7% |
| 3 | 1/314.2 | 100.5% |
| 4 | 1/275.5 | 104.3% |
| 5 | 1/256.7 | 107.2% |
| 6 | 1/231.3 | 110.1% |

- HAZUSE、一撃、パチ＆スロ必勝本、K-Naviで主要値一致。

### baseGamesPer50
- **約48.9〜49G/50枚（全設定共通扱い）**。
- HAZUSE 48.9G、一撃/ちょんぼりすた系49G表記を丸め差として保持。

### netIncrease / basicPayout
- AT「サバンナチャンス」純増: **約6.0枚/G**。
- ATはダチョウ / ゴリラ / ライオン / ゾウの4タイプ。各タイプとも100G完走を目標とする構造。
- AT終了後は有利区間残Gに応じて引き戻しゾーン「猛獣王MODE(RED)」へ。上位REDは引き戻し期待度約80%。

## modeSpecificMinimumData
- 通常時モード: **通常A / 通常B / チャンス / 天国**。
- 通常A・通常Bの最大天井: **800G + 前兆**。
- チャンス: **600G + 前兆**。
- 天国: **100G + 前兆**。
- 天井恩恵: AT「サバンナチャンス」当選。
- 通常時は肉10個で「肉ジャッジ」へ進み、CZまたはATを抽選。
- CZは「獣ロワイヤル」「パトカバチャンス」。

## resetBehavior
### settingChangeBehavior
- 設定変更時は **天井再抽選 / 内部モード再抽選 / 内部状態再抽選 / 肉0個 / 獣レベル再抽選 / 有利区間は非有利区間へ**。
- 朝一ステージは夕方系。設定変更時の設定1公開値ではダチョウ夕方30.5%、ゴリラ夕方30.5%、ライオン夕方39.0%。設定2〜6の完全表は公開資料上未確定部分が残るため補完しない。

### carryOverBehavior
- 据え置き時は、機種解析上の電源OFF→ON側挙動と整合して **天井進捗 / 内部モード / 内部状態 / 肉 / 獣レベル / 有利区間を引き継ぐ方向**。
- ただしホール側のランプ対策や前日非有利区間ヤメにより、外観だけでの判別は不能になる場合がある。

### powerCycleBehavior
- **電源OFF→ONのみ**では、天井 / 内部モード / 内部状態 / 肉 / 獣レベル / 有利区間を引き継ぐ解析表を確認。
- ステージは資料上 `調査中` が残るため、設定変更時と同一とは推定しない。

### gameCounterReset
- 設定変更: 規定ゲーム数・天井進捗をリセットし、有利区間移行時にモードを再抽選。
- 据え置き / 純電断: 引き継ぎ。
- データカウンタG数と筐体内部G数は引き戻しゾーン分などでズレるため、同一概念として扱わない。

### ceilingAfterReset
- リセット専用の固定短縮天井はなし。
- 設定変更後も選択モードに応じ **通常A/B 800G+前兆、チャンス600G+前兆、天国100G+前兆**。
- 天国移行は設定1で18.8%（別資料の丸め18.75%）を確認。全設定のモード移行表は通常時有利区間移行時テーブルとして保存し、朝一だけの別テーブルとはみなさない。

### modeAfterReset
- 設定変更時は内部モードを再抽選。
- 有利区間移行時の設定1: 通常A46.9% / 通常B31.3% / チャンス3.1% / 天国18.8%。高設定ほど天国・上位モード側が優遇される表を確認。
- 電源OFF→ONは内部モード引継ぎ。

### stateAfterReset
- 設定変更時は内部状態再抽選。
- 有利区間移行時の公開状態振り分け: **通常71.9% / 高確25.0% / 超高確3.1%**。
- 電源OFF→ONは内部状態引継ぎ。

### advantageousSectionReset
- 設定変更時: **非有利区間へ移行、有利区間ランプ消灯**。
- 電源OFF→ON: **有利区間引継ぎ**。通常営業状態では有利区間ランプ点灯側。
- 猛獣王モード終了時、有利区間リミット到達時も有利区間終了契機。

### resetBenefits
- 設定変更後は内部モード・状態を再抽選するため、天国（100G+前兆）や高確以上の選択余地がある。
- 公開状態値では高確25.0% + 超高確3.1% = **28.1%**。
- ただし「0Gから狙える期待値恩恵」とまでは資料も評価しておらず、固定恩恵として過大評価しない。

### resetPenalties
- 設定変更で前日までの天井進捗・肉・獣レベル・内部モード/状態を失うため、前日ハマリや蓄積状況によっては据え置きより不利になり得る。
- 数値化されたリセット専用期待収支の固定値は本レコードでは採用しない。

### resetDetection
- 朝一有利区間ランプ **消灯→設定変更濃厚 / 点灯→据え置き濃厚**。ただし前日非有利区間ヤメやホール対策時は判別不能。
- 後年解析では **設定変更後1G目のリールガックンを実機確認**した報告あり。別資料では解析待ち/予想段階もあるため、一次確定率ではなく `EMPIRICAL_CROSSCHECK` として扱う。
- 筐体内部G数とデータカウンタのズレ、および通常モードごとの前兆発生タイミングも据え置き推測に利用可能。

### numericResetData
- normalCeiling: `800G + 前兆（通常A/B）`
- resetCeiling: `MODE_DEPENDENT_100_600_800G_PLUS_PREMONITION`
- ceilingShortening: `NO_DEDICATED_RESET_SHORTENING_CONFIRMED`
- resetModeDistributionSetting1: `通常A46.9 / 通常B31.3 / チャンス3.1 / 天国18.8%`
- resetStateDistribution: `通常71.9 / 高確25.0 / 超高確3.1%`
- resetStageDistributionSetting1: `ダチョウ夕方30.5 / ゴリラ夕方30.5 / ライオン夕方39.0%`
- gakkunRate: `PUBLIC_RATE_NOT_FOUND; EMPIRICAL_OCCURRENCE_CONFIRMED`

## releaseDate / formalModel
- サミー公式2019-01-11発売告知は「4月上旬より全国ホール稼動予定」。
- HAZUSE、一撃、K-Navi等は導入開始日 **2019-04-01** で一致。
- HAZUSEで型式 `S猛獣王 王者の咆哮ZZ`、検定番号 `8S1172` を固定。

## boundaryAudit
- 2019-04-01群OPENを継続。
- 既登録No.1273「義風堂々!!～兼続と慶次～」に続き、本機をNo.1274として登録。
- 同群の未処理確認済み `新世紀エヴァンゲリオン 暴走400` が残るため群CLOSEDにはしない。

## missingFields
- 設定2〜6の設定変更直後ステージ完全振り分け。
- ガックンの解析上の公式発生率。
- 電源OFF→ON時の液晶ステージ確定復帰先。

## conflicts / qualityNotes
- ガックンについて、初期解析には「解析待ち/可能性高い」とする資料がある一方、後続の実戦系解析では実機で発生確認との記録がある。発生自体は `EMPIRICAL_CROSSCHECK`、公開発生率は `PUBLIC_RATE_NOT_FOUND` と分離。
- 48.9G/50枚と49G/50枚は丸め差として扱いCONFLICT化しない。

## sources
取得日: 2026-09-11
1. Sammy公式 — https://www.sammy.co.jp/japanese/news/2019/1200.html — 2019-01-11発売告知、4月上旬稼動予定、純増6.0枚×色目押しAT — reliability: `OFFICIAL`
2. HAZUSE — https://hazuse.com/machine/pachislot/8S1172/ — 型式、検定番号、2019-04-01、設定別AT初当たり/機械割、48.9G/50枚、純増 — reliability: `ANALYSIS_HIGH_MACHINE_DB`
3. グリーンべると / P-WORLD — https://news.p-world.co.jp/articles/10714/greenbelt — 2019-01-22内覧会、AT初当たりレンジ、純増6.0枚/G、4月上旬納品 — reliability: `INDUSTRY_CONTEMPORARY`
4. 一撃 — https://1geki.jp/slot/s_mojyuo_hoko/ — 2019-04-01、設定別初当たり/機械割、6号機AT — reliability: `ANALYSIS_HIGH`
5. パチ＆スロ必勝本 — https://p.hisshobon.jp/machine/3308/1/72826 — 2019-04-01、設定別AT初当たり/機械割、純増約6.0枚/G — reliability: `ANALYSIS_HIGH_CROSSCHECK`
6. K-Navi — https://p-kn.com/slot/3176/ — 2019-04-01導入、AT分類・設定別初当たり — reliability: `MACHINE_DB_HIGH`
7. おスロおパチおいでやす — https://oslo-opachi.com/2019/04/01/post-5441/ — 天井、モード、設定変更/電源OFF→ON比較、有利区間ランプ、朝一ステージ/状態公開値 — reliability: `ANALYSIS_HIGH_RESET_TABLE`
8. すろぱちくえすと — https://www.slopachi-quest.com/article/moujyuuou-tennjou/ — 朝一ガックン実機確認、リセット後状態28.1%、天国18.75%、有利区間ランプ/前兆判別 — reliability: `ANALYSIS_CROSSCHECK_EMPIRICAL`
9. 期待値見える化 — https://slotjin.com/slot/moujuou-reset/ — 朝一リセット後=有利区間突入後の挙動、ランプ/ガックン/液晶G数/前兆による判別整理 — reliability: `ANALYSIS_CROSSCHECK`
