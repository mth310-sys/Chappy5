# パチスロ〈物語〉シリーズ セカンドシーズン

No: 1344
machineName: パチスロ〈物語〉シリーズ セカンドシーズン
machineNameVariants: 物語シリーズ セカンドシーズン / 化物語2 / S物語セカンドシーズンXA
manufacturer: サミー（製造元: タイヨーエレック）
releaseDate: 2020-03-16
formalModelName: S物語セカンドシーズンXA
certificationNumber: 9S1727
generation: 6号機
systemType: AT / 差枚数管理 / CZ→チャンスAT→メインAT

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.9% |
| 3 | 101.1% |
| 4 | 105.1% |
| 5 | 109.0% |
| 6 | 112.8% |

- パチマガスロマガ、必勝本、HAZUSE、なな徹等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
### CZ「結末ノ儀」
| 設定 | 確率 |
|---|---:|
| 1 | 1/149.4 |
| 2 | 1/147.6 |
| 3 | 1/146.9 |
| 4 | 1/145.2 |
| 5 | 1/141.1 |
| 6 | 1/133.1 |

### チャンスAT「傾物語」
| 設定 | 確率 |
|---|---:|
| 1 | 1/331.4 |
| 2 | 1/323.8 |
| 3 | 1/311.9 |
| 4 | 1/273.9 |
| 5 | 1/250.2 |
| 6 | 1/221.8 |

- 後発の複数解析で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50.8G/50枚（設定1目安）。
- HAZUSE、グリーンべると等で一致。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## netIncrease
- AT純増: 約2.8枚/G。
- reliability: OFFICIAL_INDUSTRY_AND_ANALYSIS_HIGH

## basicPayout
- チャンスAT「傾物語」: 前半15G+α、後半8G。成功でメインATへ。
- メインAT「倖時間SS」: 初期150枚 + 開始時「倍倍チャンス」による上乗せ分。
- ボーナス: 30G。
- 上位AT「あとがたり」: 1セット100枚、継続率管理。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井: **200G or 500G消化後、前兆を経由して傾物語当選**。
- スイカ成立時は天井G数を5Gまたは100G減算。
- 有利区間移行時は天井減算高確へ入り、30/40/50/100Gの振り分けが 69.1/20.3/10.2/0.4%、平均34.3G。高確中はスイカ成立時の100G減算率が上がる。
- AT「倖時間SS」は差枚数管理で初期150枚+倍倍チャンス。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_RESET_TABLE_AND_GAKKUN
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 後発の朝一解析で **設定変更時は天井RESET / 内部状態RESET** とする表を確認。
- 1gekiの導入直後（2020-03-19）ページでは天井G数・状態・モード・液晶ステージがすべて「調査中」だったため、公開時点差を保持する。
- 設定変更時のモード再抽選内容・液晶開始ステージは直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きは、純電源OFF→ON時の後発解析に合わせ **天井 / 内部状態CARRY_OVER** と整理。
- 据え置き専用のモード・液晶ステージ契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 後発解析で **電源OFF→ONのみは天井引継ぎ / 内部状態引継ぎ**。
- モード・液晶ステージは直接確定値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 通常天井は200Gまたは500Gを基準とし、スイカの天井減算があるため見かけ上の到達Gは短くなる場合がある。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし有利区間移行時は天井減算高確に入り、スイカ成立時の100G減算率が上がる。これは公開されている区間移行時仕様として分離保存する。

### modeAfterReset
- 設定変更時のモード再抽選方法・朝一専用モード・振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 通常周期の「結末モード」等から朝一値を推測しない。

### stateAfterReset
- 設定変更: **RESET**（後発朝一解析）。
- 電源OFF→ON: **CARRY_OVER**（後発朝一解析）。
- 具体的な内部状態振り分けは非公開/未固定。

### advantageousSectionReset
- 通常時は有利区間ランプが消灯するタイプで、ランプ消灯そのものは設定変更判別に使えない。
- 有利区間移行時に天井減算高確へ入ることは解析で確認。
- 設定変更・据え置き・純電断を三者比較した本機固有の有利区間ランプ契約は直接資料を十分固定できず、一般6号機知識からの推測補完はしていない。

### resetBenefits
- 設定変更後だけの明確な出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間移行時の天井減算高確は存在するが、設定変更専用恩恵と断定せず区間移行時仕様として扱う。

### resetPenalties
- 設定変更により前日の天井進行・内部状態を消去。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **ガックンによる設定変更判別が有効**とする複数攻略資料を確認。
- 通常時は有利区間ランプが消灯しているため、有利区間ランプでは変更判別不可。
- ガックンはリール劣化等で判別困難なケースがある旨の攻略注意書きあり。
- 本機固有のガックン発生率・100%保証値は確認できず、発生率は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 通常天井: **200G or 500G消化後+前兆**。
- 天井減算: スイカ成立時 **5G or 100G**。
- 有利区間移行時の天井減算高確G数: **30G 69.1% / 40G 20.3% / 50G 10.2% / 100G 0.4% / 平均34.3G**。
- 設定変更専用の天井短縮値、朝一特定G以内当選率、朝一専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11に `パチスロ〈物語〉シリーズ セカンドシーズン / 物語シリーズ セカンドシーズン / 化物語2 / S物語セカンドシーズンXA / サミー / タイヨーエレック / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ` を組み替え、サミー公式、業界記事、1geki、パチマガスロマガ、HAZUSE、必勝本、なな徹、ちょんぼりすた、スロパチクエスト、当時攻略整理を横断。後発資料で天井/内部状態のRESET・CARRY_OVERとガックン有効を固定。モード、液晶ステージ、ガックン発生率、設定変更専用朝一数値は固定できず推測補完していない。

## conflicts
- CZ「結末ノ儀」は、2020-02-14のグリーンべると発表記事に **設定1 1/150〜設定6 1/122.7** とある一方、導入後のパチマガスロマガ・必勝本・HAZUSE・なな徹・K-Navi等は **1/149.4〜1/133.1** で一致。導入後の複数解析一致をcanonicalとし、前者は事前/初期公表値として `CONFLICT_PRE_RELEASE_CZ_RATE_1_150_TO_1_122_7_VS_POST_RELEASE_1_149_4_TO_1_133_1` を保持。
- 1gekiの2020-03-19初期ページは設定変更/電断時の天井・状態・モード・ステージを「調査中」。2020-05-23更新の当時攻略整理では設定変更=天井/内部状態RESET、電断=引継ぎ。解析公開時点差として後発表を採用するが、モード/ステージは未固定。

## sources
取得日: 2026-09-11

1. サミー公式ニュースリリース（2020-02-05）
   - https://www.sammy.co.jp/japanese/news/2020/1403.html
   - 製造元タイヨーエレック、3月中旬導入予定を確認。
   - reliability: OFFICIAL
2. 遊技日本（2020-03-13）
   - https://yugi-nippon.com/pachinko-new-machine/post-33817/
   - 全国ホール導入開始2020-03-16を確認。
   - reliability: INDUSTRY
3. グリーンべると（2020-02-14）
   - https://web-greenbelt.jp/post-35694/
   - 純増約2.8枚/G、倖時間初期150枚+倍倍チャンス、約50.8G/50枚、初期CZ公表値を確認。
   - reliability: INDUSTRY
4. HAZUSE
   - https://hazuse.com/machine/pachislot/9S1727/
   - 検定番号9S1727、設定別結末ノ儀/傾物語、約50.8G、機械割を確認。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ 基本確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/179/h.php
   - 設定別結末ノ儀/傾物語を確認。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ 天井減算
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/179/09.php
   - スイカ5/100G減算、有利区間移行時天井減算高確、30/40/50/100G振り分けを確認。
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 基本スペック
   - https://p.hisshobon.jp/machine/3488/1/76898
   - 2020-03-16、設定別CZ/傾物語/機械割、倖時間初期150枚+倍倍チャンスを確認。
   - reliability: ANALYSIS_HIGH
8. なな徹 基本スペック/天井
   - https://nana-press.com/kaiseki/machine/13/169/
   - https://nana-press.com/kaiseki/machine/13/173/
   - 設定別数値、200/500G天井を照合。
   - reliability: ANALYSIS_HIGH
9. 1geki 天井・設定変更（最終更新2020-03-19）
   - https://1geki.jp/slot/s_monogatari2/3/
   - 200/500G天井、導入直後時点で設定変更/電断の各項目が調査中だった履歴を確認。
   - reliability: ANALYSIS_HIGH
10. おスロおパチおいでやす（2020-05-23更新）
   - https://oslo-opachi.com/2020/03/15/monogatari-series-tennjou/
   - 設定変更=天井/内部状態RESET、電源OFF→ON=引継ぎの後発朝一表を確認。
   - reliability: ANALYSIS_SINGLE
11. スロパチクエスト
   - https://www.slopachi-quest.com/article/monogatari-series-tennjou/
   - ガックン判別有効、通常時有利区間ランプ消灯でランプ判別不可を確認。
   - reliability: ANALYSIS_HIGH
12. P-WORLD
   - https://www.p-world.co.jp/machine/database/9147
   - 6号機AT、純増約2.8枚/G、傾物語15G、倖時間150枚+上乗せ、あとがたり100枚/セットを確認。
   - reliability: INDUSTRY_DB

## missingFields
- 設定変更時のモード振り分け
- 設定変更/電断後の液晶開始ステージ
- 本機固有のガックン発生率
- 設定変更専用の朝一当選率/期待値の高信頼公開値
- 有利区間ランプを三者比較した直接の設定変更/据え置き/電断契約

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_RESET_TABLE_AND_GAKKUN
