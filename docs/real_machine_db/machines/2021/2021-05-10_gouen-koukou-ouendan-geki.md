# 豪炎高校應援團 檄

No: 1412
machineName: 豪炎高校應援團 檄
machineNameVariants: S豪炎高校應援團 檄 / 豪炎高校応援団 檄 / 豪炎高校應援團檄 / ゴウエンコウコウオウエンダンゲキ
manufacturer: 山佐
salesCompany: 山佐ネクスト
releaseDate: 2021-05-10
formalModelName: SゴウエンコウコウオウエンダンゲキCC
certificationNumber: 0S1087

generation: 6.1号機
systemType: AT / 規定ゲーム数管理 / 擬似ボーナス「応援ロード」経由

## identity / release
- 山佐ネクストが山佐製「豪炎高校應援團 檄」の販売開始を2021年3月に発表。業界一次系記事でも山佐製・山佐ネクスト販売として確認。
- 山佐公式製品ページが現存。
- K-Navi、1geki、HAZUSE、複数導入カレンダーでホール導入開始日2021-05-10が一致。
- HAZUSE機種DBで型式 `SゴウエンコウコウオウエンダンゲキCC`、検定番号 `0S1087` を確認。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.7% |
| 3 | 100.0% |
| 4 | 103.9% |
| 5 | 106.2% |
| 6 | 110.2% |
- 1geki、HAZUSE、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | 応援ロード初当り |
|---:|---:|
| 1 | 1/482.65 |
| 2 | 1/427.66 |
| 3 | 1/474.60 |
| 4 | 1/373.36 |
| 5 | 1/485.23 |
| 6 | 1/330.79 |
- 「応援ロード」はAT当選ジャッジを行う擬似ボーナス。公開スペックで設定別AT初当りは主要解析資料でも未固定のため、応援ロード初当りを主要初当りとして採用する。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50.01〜51G/50枚。HAZUSEは設定1約50.01G、業界記事・複数解析は約51G表記。
- 丸め精度差として扱い、CONFLICTにはしない。
- reliability: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- AT「団旗ラッシュ」: 約2.7枚/G。
- 上位AT「団旗バッシュ」も基本約2.7枚/G。「森羅万象」経由時は約4.8枚/Gとの解析あり。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 擬似ボーナス「応援ロード」: 前半20G＋後半最大13G、平均獲得約54枚。
- AT「団旗ラッシュ」: 1セット46G+α（前半29G+α＋後半17G）。設定1のAT突入時期待枚数約1311.9枚、平均継続約6.4セットとの解析あり。
- 上位AT「団旗バッシュ」: 1セット20G+α、STバトル、継続率約86%。
- 熱血ボーナス: 約100枚。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は通常A / 通常B / 通常C / SPの4モードで規定ゲーム数を管理。
- 最大規定Gは通常A 800G / 通常B 750G / 通常C 500G / SP 800G。規定G到達で応援ロード。
- SPは応援ロード中のAT抽選優遇＋AT当選時シナリオ11/12/13濃厚。
- CZ「天丼チャレンジ」で規定ゲーム数を5〜100Gずつ減算。有利区間移行時は初回天丼チャレンジへ必ず移行する。
- 応援ロードAT非当選後に有利区間を継続した場合は、気合ポイント引継ぎ＋次回最大規定G500G以下という恩恵が確認されている。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_AND_HIDDEN_INITIAL_TENDON_NUMERIC_DATA
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間RESET、天井RESET、内部モードRESET。
- 絵瑠チャンス、気合ポイント、マサルポイントもRESET。
- 朝一は非有利区間から開始し、新規有利区間移行後の初回天丼チャレンジを内部的に行う。
- 設定変更後の初回天丼チャレンジは液晶上では通常ステージのまま進む「隠れ天丼チャレンジ」。
- 朝一表示は規定ゲーム数カウンター「???」、ステージは校舎/巧者ステージ（昼）系の通常開始表記。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置きは設定変更を伴わない電源ON/OFF契約に準じ、有利区間・天井・内部モード・各種ポイントを内部的にCARRY_OVERする。
- 応援ロードAT非当選後に機種内部で有利区間継続が選ばれた場合も、気合ポイントを引き継ぎ、次回最大規定G500G以下となる別の「区間継続」契約が存在する。朝一据え置きとの定義を分離する。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定を変更せず電源OFF→ONのみの場合、有利区間・天井・内部モードをCARRY_OVER。
- 絵瑠チャンス、気合ポイント、マサルポイントも内部的にCARRY_OVER。
- G数カウンターは「???」表示へ戻り、ステージも昼の通常ステージへ見た目上復帰するため、表示RESETと内部進行CARRY_OVERを分離して扱う。
- マサル高確帯は非表示になるが、内部的には高確を引き継ぐ可能性がある。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時: 内部天井/規定ゲーム数進行をRESET。
- 据え置き/純電断: 内部天井・規定ゲーム数進行をCARRY_OVER。
- 朝一は設定変更/電源ON-OFFの双方で液晶規定ゲーム数カウンターが「???」表示となり、応援ロード・天丼チャレンジ・気合マーチのいずれかに当選すると数値表示へ戻る。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更後は新規有利区間契約へ戻り、モード別最大規定Gは通常A 800G / 通常B 750G / 通常C 500G / SP 800G。
- 設定変更専用の固定短縮天井は確認できない。
- ただし新規有利区間移行時に必ず初回天丼チャレンジを受け、設定変更時はこれが液晶非表示の「隠れ天丼チャレンジ」となるため、実質的に規定G減算を受けた状態から開始する。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は内部モードRESET。
- 新規有利区間の初回天丼チャレンジ終了時、減算後の残りG数を参照して通常A/B/C/SPを抽選する。
- 公開モード移行率は「設定変更専用テーブル」ではなく初回天丼チャレンジ結果に連動する共通テーブル。設定変更は初回天丼チャレンジを内部的に受けるため朝一にも関係する。
- 純電断時は内部モードCARRY_OVER。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更では絵瑠チャンス・気合ポイント・マサルポイントをRESETし、新規有利区間開始時の初回天丼チャレンジへ。
- 純電断では各ポイントおよび内部状態をCARRY_OVER。マサル高確の帯は非表示になるが、内部高確の可能性は残る。
- 「CZ高確の設定変更専用初期振り分け」の独立した公開固定値は、機種名/型式/山佐/山佐ネクスト＋朝一/設定変更/内部状態/CZ高確/初期振り分け等で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更時: 有利区間RESET → 非有利区間 → 新規有利区間。
- 純電断/据え置き: 進行中有利区間をCARRY_OVER。
- 応援ロードAT非当選時は一部で有利区間継続があり、その場合「気合ポイント引継ぎ＋次回最大規定G500G以下」。AT終了時は有利区間リセット契機として扱われる解析あり。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更で有利区間を新規開始すると、初回天丼チャレンジが必ず行われる。設定変更時は液晶上で告知しない「隠れ天丼チャレンジ」。
- 天丼チャレンジは1Gあたり5〜100Gを減算し、初回は5G保証後の継続率80%以上が確定。解析上、初回の平均滞在は約10G。
- その結果を参照してモードが選択され、減算が大きいほど通常C等の早い最大規定Gへ寄りやすい。
- これは「設定変更専用の別抽選値」ではなく、新規有利区間開始時共通の初回CZ契約を設定変更後にも受けるものとして保存する。
- reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更で前日の天井進行・内部モード・絵瑠チャンス・気合ポイント・マサルポイントを失う。
- 据え置きなら保持できる有利区間継続中のポイント/天井進行も、設定変更ではRESETされる。
- 設定変更専用の定量的期待値低下率は `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 朝一の規定ゲーム数カウンター「???」および昼の通常ステージは、設定変更/純電断の双方で発生するため単独判別不可。
- 有利区間ランプはクレジット右下ドット。通常時は基本消灯型とされるため、朝一消灯だけでは設定変更確定に使えない。
- 朝一で有利区間ランプが点灯している場合は、前日の有利区間を引き継いでいる強い据え置き材料となる。
- 本機固有の設定変更時リールガックン条件/発生率は、機種名・正式型式・山佐・「リセット/設定変更/朝一/ガックン」で再探索しても高信頼の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 新規有利区間で初回天丼チャレンジへ必ず移行。設定変更時は液晶非表示で内部実行。
- 天丼チャレンジ: 5G保証＋継続抽選、通常継続率75〜90%。初回は継続率80%以上確定、初回平均滞在約10G。1Gあたり規定Gを5〜100G減算。
- 初回天丼チャレンジ終了後の残りG数別モード移行率:
  - ～449G: 通常C 100%。
  - 450〜549G: 通常B 50.00% / 通常C 50.00%。
  - 550〜649G: 通常A 21.88% / 通常B 50.78% / 通常C 27.34%。
  - 650〜749G: 通常A 44.14% / 通常B 39.84% / 通常C 10.94% / SP 5.08%。
  - 750G以上: 通常A 57.81% / 通常B 25.00% / 通常C 7.03% / SP 10.16%。
- モード別最大規定G: 通常A 800G / 通常B 750G / 通常C 500G / SP 800G。
- 上記モード移行率は「設定変更専用値」ではなく、新規有利区間の初回天丼チャレンジ結果に適用される共通公開値。

## conflicts
- baseGamesPer50はHAZUSE設定1約50.01G、業界/攻略資料では約51G。丸め・表示精度差として同一レンジに保持し、平均化しない。
- 朝一ステージ名称は資料に「校舎(昼)」「巧者ステージ(昼)」系の表記差があるが、いずれも昼の通常ステージ開始という挙動は一致。性能差を伴うCONFLICTにはしない。

## missingFields
- 設定別AT直撃を含むAT総初当り確率: `UNVERIFIED_AFTER_RESEARCH`（主要公開スペックは応援ロード初当りを設定別主要値として掲載）。
- 設定変更専用の独立した内部モード振り分け表: `NO_SEPARATE_RESET_ONLY_TABLE_CONFIRMED_AFTER_RESEARCH`。初回天丼チャレンジ結果連動の共通モード表は取得済み。
- 設定変更専用CZ高確初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の設定変更時リールガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の定量的不利率: `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

## sources
取得日: 2026-09-12

### OFFICIAL / INDUSTRY
- 山佐公式「豪炎高校應援團 檄」: https://www1.yamasa.co.jp/gog/
- 山佐ネクスト サウンドトラック（機種存在/権利主体補助）: https://yamasa-next.co.jp/music-distribution/gog/
- 日刊スポーツ / 娯楽産業「山佐ネクスト 新機種『豪炎高校應援團 檄』発表」: https://www.nikkansports.com/amusement/pachislot/news/202103080000555.html
- PiDEA X「豪炎高校應援團 9年ぶりの新作発表／山佐ネクスト」: https://www.pidea.jp/articles/1614765626
- グリーンべると「パチスロ『豪炎高校應援團 檄』、継続率約86％のATを搭載！」: https://web-greenbelt.jp/post-44912/

### ANALYSIS / DATABASE
- HAZUSE 基本スペック・型式/検定: https://hazuse.com/machine/pachislot/0S1087/
- HAZUSE 天井・設定変更: https://hazuse.com/machine/pachislot/0S1087/genre/207/
- 1geki 機種概要: https://1geki.jp/slot/s_goeng/
- 1geki 通常時のモード: https://1geki.jp/slot/s_goeng/42/
- なな徹 朝イチ/設定変更: https://nana-press.com/kaiseki/machine/120/3780/
- なな徹 CZ「天丼チャレンジ」: https://nana-press.com/kaiseki/machine/120/3567/
- なな徹 通常時のモード: https://nana-press.com/kaiseki/machine/120/3564/
- Pachiseven CZ概要: https://pachiseven.jp/machines/6283/cutout/8
- ちょんぼりすた 総合解析: https://chonborista.com/slot/yamasa-slot/133450/
- パチマガスロマガ ゲームの流れ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/239/kh03.php
- パチマガスロマガ 通常時の内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/239/tj04-1.php
- K-Navi: https://p-kn.com/slot/3567/
- パチスロメソッド（有利区間ランプ/引継ぎ補助）: https://slotmethod.jp/archives/6331/
- イチカツ 2021年導入カレンダー: https://ichikatsu.com/newslot/

## quality
- coreReliability: ANALYSIS_HIGH / INDUSTRY
- resetReliability: ANALYSIS_HIGH
- identityReliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH
- recordStatus: COMPLETE_CORE
- resetStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_AND_HIDDEN_INITIAL_TENDON_NUMERIC_DATA
