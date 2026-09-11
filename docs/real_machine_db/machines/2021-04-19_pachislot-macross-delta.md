# パチスロ マクロスデルタ

No: 1406
machineName: パチスロ マクロスデルタ
machineNameVariants: パチスロ マクロスΔ / マクロスデルタ / マクロスΔ / SマクロスデルタjS
manufacturer: ジェイビー製造 / SANKYOブランド
releaseDate: 2021-04-19
formalModelName: SマクロスデルタjS
certificationNumber: 0S1236

generation: 6.1号機
systemType: ベルナビ回数管理型AT / CZ経由主体 / 高純増AT

## identity / release
- SANKYOオンライン博物館で導入年月2021.04、SANKYOブランド機として確認。
- HAZUSEで型式 `SマクロスデルタjS`、検定番号 `0S1236`、導入開始日2021-04-19、メーカー表記ジェイビーを確認。
- P-WORLDはメーカーSANKYO、製造ジェイビーとして掲載。ブランド表記と型式製造元を混同しないため、本DBでは「ジェイビー製造 / SANKYOブランド」とする。
- P-WORLD、パチビー、K-Navi、必勝本でも2021-04-19導入が一致。
- reliability: OFFICIAL / INDUSTRY_DB / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.2% |
| 3 | 99.9% |
| 4 | 103.7% |
| 5 | 105.8% |
| 6 | 109.6% |
- HAZUSE、必勝本、パチビー、複数解析で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | CZ初当たり | AT初当たり |
|---:|---:|---:|
| 1 | 1/424 | 1/875 |
| 2 | 1/413 | 1/779 |
| 3 | 1/400 | 1/656 |
| 4 | 1/398 | 1/525 |
| 5 | 1/392 | 1/467 |
| 6 | 1/387 | 1/374 |
- HAZUSE、必勝本、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約43.0G/50枚を物差しcanonicalとする。
- 当時解析・新台資料で約43G/50枚が複数一致。
- HAZUSEは貸出単位を46枚として「約39G/46枚」と掲載しており、単位が異なるため数値を直接CONFLICT扱いせず別定義として保持する。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「戦術LIVE」: 約9.5枚/G。
- デルタボーナスも約9.5枚/G。
- reliability: OFFICIAL / INDUSTRY_DB / ANALYSIS_HIGH

## basicPayout
- AT「戦術LIVE」: リンゴナビ回数管理。AT初当たり時のワルキューレチャンスで獲得する平均ナビ回数は約65回。
- AT1回あたり平均獲得は約900枚とする解析あり。
- デルタボーナス: ナビ15回固定。
- LIMIT-A: 発動時は2400枚獲得または有利区間1500G消化まで継続する完走系AT。
- reliability: OFFICIAL / INDUSTRY_DB / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は毎ゲーム「デルタカウンター」が1pt以上加算され、ゾロ目到達時を中心にCZ抽選。
- 基本天井はデルタカウンター777pt。通常時平均約492〜500Gで到達し、CZ「バルキリーゾーン」またはATに当選する資料が複数ある。
- 777ptで通常CZに当選しないケースでは888pt（通常時平均約558G）で狂暴化CZ当選濃厚。
- 通常モード群として通常 / チャンスA / チャンスB / 狂暴化A〜Cが公開され、チャンスAは666pt以内、チャンスBは555pt以内が天井目安。リベンジ等の特殊状態も存在するが、物差しDBでは全移行テーブルは収集しない。
- リンゴカウンターは有利区間リセットまで継続的に加算され、200到達でLIMIT-A発動。通常時→AT中でも同一有利区間なら継続する。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_RESET_SPECIFIC_NUMERIC_BENEFIT
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井、内部状態、内部モード、有利区間をRESETする。
- 朝一ステージは格納庫。格納庫後にデルターボを経て通常時へ移行する流れが公開されている。
- 有利区間開始時のデルタカウンター111ptに専用の朝一機会があり、そこでCZに当選した場合は「極限バルキリーゾーン」確定。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 設定据え置きで通常の電源OFF→ONを伴う営業日跨ぎは、公開されている純電断契約に従い、天井、内部状態、内部モード、有利区間を引き継ぐ。
- 朝一の有利区間ランプ点灯は据え置き濃厚とされる。ただし店側の対策や前日の終了状態による例外を考慮し、確定判別とはしない。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみ: 天井CARRY_OVER / 内部状態CARRY_OVER / 内部モードCARRY_OVER / 有利区間CARRY_OVER / ステージ引き継ぎ。
- なな徹、HAZUSE、スロぱちくえすとで同一表が確認できる。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時はデルタカウンター天井進行をRESET。
- 純電断では天井を引き継ぐ。
- リンゴカウンターは「有利区間リセットまで加算継続」と公開されているため、設定変更による有利区間RESETでは同一有利区間の蓄積を持ち越さない契約として扱う。純電断で有利区間が引き継がれる場合は蓄積も継続する。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認されない。
- 新規有利区間の基本天井はデルタカウンター777pt（通常時平均約492〜500G）。777ptで通常CZ非当選時は888pt（平均約558G）で狂暴化CZ当選濃厚。
- 設定変更後111ptでCZに当選した場合の「極限VZ」確定は朝一恩恵だが、固定天井短縮ではない。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は内部モードRESET / 再セット。
- 電源OFF→ONのみでは内部モードCARRY_OVER。
- 通常 / チャンスA / チャンスB / 狂暴化A〜C等の存在は公開されているが、設定変更専用の初期モード振り分け率は、機種名・型式・「設定変更 / リセット / 朝一 / モード振り分け / 有利区間開始時」を組み替え、複数解析・旧攻略資料まで再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH（RESET/CARRY_OVER） / UNVERIFIED_AFTER_RESEARCH（専用振り分け率）

### stateAfterReset
- 設定変更時は内部状態RESET。
- 電源OFF→ONのみでは内部状態CARRY_OVER。
- 設定変更専用の内部状態初期振り分け率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更時は有利区間RESET、朝一はランプ消灯。
- 電源OFF→ONのみでは有利区間CARRY_OVER。
- 有利区間ランプは有利区間滞在中に点灯するタイプ。格納庫→デルターボ移行時に点灯し、設定変更時およびCZ/AT終了時の一部で消灯する。
- CZ/AT終了後に有利区間を継続するケースがあるため、営業中の消灯/点灯は設定変更判別とは別に扱う。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更時（新規有利区間開始時）は、デルタカウンター111pt到達時にCZへ当選すると必ず「極限バルキリーゾーン」へ突入する。
- 111pt時のCZ当選期待度は約15%（リベンジモードを除く）と複数解析で確認。
- 極限VZ成功時はLIMIT-A発動、失敗時でもリベンジモードへ移行するため、朝一客行動へ影響する定量的リセット恩恵として保存する。
- 設定変更専用の固定短縮天井や、専用初期モード振り分け率は確認できない。
- reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更により前日からのデルタカウンター天井進行、内部モード/状態、有利区間、同一区間内で蓄積するリンゴカウンターを引き継がないため、前日進行度が高い台では据え置きと比較して蓄積価値を失う側面がある。
- これとは別に設定変更専用の定量的ペナルティや初当たり悪化率は公開資料で確認できず `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 朝一有利区間ランプ消灯: 設定変更濃厚。
- 朝一有利区間ランプ点灯: 据え置き濃厚。
- ただし有利区間はCZ/AT終了時の一部でも切れ、店舗側の対策可能性もあるため確定判別にはしない。
- 設定変更時は格納庫スタート。純電断ではステージ引き継ぎなので、開始ステージも補助判別材料になり得る。ただし店側の回し対策を考慮する。
- 本機固有のリールガックン発生条件/発生率は、表記揺れ・型式・メーカー名を含め「ガックン / リール始動 / 朝一」を再探索しても高信頼な固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH（ランプ/ステージ） / UNVERIFIED_AFTER_RESEARCH（ガックン）

### numericResetData
- 設定変更後（有利区間開始時）デルタカウンター111ptでのCZ当選期待度: 約15%（リベンジモードを除く）。
- 111ptでCZ当選時: 極限バルキリーゾーン確定。
- 設定変更専用の初期モード振り分け率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の内部状態振り分け率: `UNVERIFIED_AFTER_RESEARCH`。
- 固定短縮天井: `NO_PUBLIC_RESET_SPECIFIC_FIXED_SHORTENED_CEILING_FOUND`。

## conflicts
- ベースについて、複数資料は約43.0G/50枚、HAZUSEは約39G/46枚と掲載。貸出枚数単位が異なるため同一単位の数値競合とは扱わず、50枚基準の約43Gを物差しcanonicalとする。
- メーカー表記はSANKYOとジェイビーが混在するが、P-WORLDが「メーカー SANKYO / 製造 ジェイビー」と明示し、HAZUSEの型式DBはジェイビー、SANKYO公式博物館はSANKYOブランドとして掲載するため、ブランド/製造の役割差として統合しCONFLICTにはしない。
- 天井説明は「777ptでCZorAT当選」とする総合DBと、「777ptで通常CZ抽選、非当選なら888ptで狂暴化CZ」とする詳細解析がある。詳細解析をcanonical契約とし、777ptを第1天井、888ptを第2天井として定義差を保持する。

## missingFields
- 設定変更専用の初期モード振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の内部状態初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12

1. SANKYOオンライン博物館「パチスロ マクロスデルタ」
   - https://www.sankyo-fever.jp/collection/918/
   - 公式。導入年月2021.04、SANKYOブランド、純増約9.5枚のナビ回数管理型AT、通常時/CZ構造。
   - reliability: OFFICIAL
2. HAZUSE「パチスロ マクロスデルタ」
   - https://hazuse.com/machine/pachislot/0S1236/
   - 型式SマクロスデルタjS、検定番号0S1236、導入日、ジェイビー、設定別CZ/AT/機械割、46枚ベース、天井、モード、設定変更/純電断、ランプ、111pt朝一恩恵。
   - reliability: ANALYSIS_HIGH
3. P-WORLD「パチスロ マクロスデルタ」
   - https://www.p-world.co.jp/machine/database/9369
   - メーカーSANKYO / 製造ジェイビー、ゲーム性、AT約9.5枚/G、平均ナビ約65回、デルタボーナス15ナビ、LIMIT-A、天井。
   - reliability: INDUSTRY_DB / ANALYSIS_HIGH
4. なな徹「朝イチ/有利区間ランプ」
   - https://nana-press.com/kaiseki/machine/119/3616/
   - 設定変更と電源ON/OFFの天井・内部状態・モード・有利区間・ステージ比較、111pt時の極限VZ、CZ期待度約15%、有利区間ランプ。
   - reliability: ANALYSIS_HIGH
5. なな徹「リンゴカウンター」
   - https://nana-press.com/kaiseki/machine/119/3479/
   - リンゴカウンターは有利区間リセットまで継続加算、200到達でLIMIT-A。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ「ゲームの流れ / 極限VZ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/54/kh03.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/54/cz03.php
   - 設定変更後等の格納庫→デルターボ、AT平均約900枚、111pt極限VZ契約。
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本「基本スペック」
   - https://p.hisshobon.jp/machine/3638/1/81588
   - 設定別CZ/AT/機械割、導入日、純増約9.5枚/G。
   - reliability: ANALYSIS_HIGH
8. パチビー「パチスロ マクロスデルタ」
   - https://www.pachibee.jp/machines/index/221030004
   - 導入日、スペック、平均ナビ約65回、デルタボーナス15ナビ、機械割、天井。
   - reliability: ANALYSIS_HIGH
9. スロぱちくえすと「天井解析まとめ」
   - https://www.slopachi-quest.com/article/macross-delta-tenjou/
   - 約43G/50枚、第1/第2天井、設定変更/電断比較、111pt CZ期待度約15%、ランプ判別。
   - reliability: ANALYSIS_HIGH
10. ちょんぼりすた「マクロスデルタ」
   - https://chonborista.com/slot/sankyo-slot/132698/comment-page-37/
   - 約43G/50枚、設定別CZ/AT/機械割、純増、天井、有利区間/朝一情報。
   - reliability: ANALYSIS_HIGH
11. パチスロメソッド「天井期待値・リセット判別」
   - https://slotmethod.jp/archives/6161/
   - 約43G/50枚、有利区間ランプによるリセット判別、設定変更後の目立った追加データ有無の補助確認。
   - reliability: ANALYSIS_SINGLE
