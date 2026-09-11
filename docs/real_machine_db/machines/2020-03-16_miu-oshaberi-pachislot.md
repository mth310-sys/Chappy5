# みうのおしゃべりパチスロ

No: 1346
machineName: みうのおしゃべりパチスロ
machineNameVariants: みうスロ / SみうスロM1
manufacturer: 岡崎産業
releaseDate: 2020-03-16
formalModelName: SみうスロM1
certificationNumber: 9S0093
generation: 6号機
systemType: AT / 擬似ボーナス連チャン / STループ

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.2% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 110.0% |

- ちょんぼりすた、1geki、スロパチクエスト、ぱちんこキュレーションで一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
### AT初当たり（公開比較値）
| 設定 | AT初当たり |
|---|---:|
| 1 | 1/283.9 |
| 2 | 1/264.9 |
| 3 | 1/237.9 |
| 4 | 1/199.4 |
| 5 | 1/171.5 |
| 6 | 1/129.3 |

- 公開資料には「通常時100G消化後から算出」との注記があり、通常開始時点からの完全な実質初当たりとは定義を分ける。

### AT詳細出現率
| 設定 | BIG | REG | SPECIAL | 合算 |
|---|---:|---:|---:|---:|
| 1 | 1/288.2 | 1/438.6 | 1/4862.2 | 1/167.9 |
| 2 | 1/275.4 | 1/418.1 | 1/4655.3 | 1/160.3 |
| 3 | 1/270.2 | 1/344.5 | 1/4282.2 | 1/146.3 |
| 4 | 1/239.4 | 1/305.9 | 1/3812.0 | 1/129.7 |
| 5 | 1/213.5 | 1/281.6 | 1/5746.3 | 1/118.9 |
| 6 | 1/187.6 | 1/208.8 | 1/4718.5 | 1/96.8 |

- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 設定1: 約53.8G/50枚。
- 公開設定別レンジ: 約53.8〜57.0G/50枚。
- 確認できた個別値: 設定1 53.8G / 設定4 54.7G / 設定5 55.5G / 設定6 57.0G。
- 設定2・3の個別値は今回確認資料で欠落しており推測補完しない。
- reliability: ANALYSIS_HIGH_PARTIAL_SETTING_ROWS

## netIncrease
- AT「らぶみうたいむ」純増: 約2.7枚/G。
- reliability: INDUSTRY_WITH_MULTIPLE_ANALYSIS_CONFIRMATION

## basicPayout
- BIG: 60G、約160枚。
- REG: 30G、約80枚。
- らぶみうたいむ すぺしゃる: 111〜555G、約300〜約1500枚。
- AT終了後は32GのST「スペシャルタイム」へ移行。
- reliability: INDUSTRY_HIGH

## modeSpecificMinimumData
- 通常時は小役抽選の表モードと100G周期抽選の裏モードが並行し、通常 / 高確 / 超高確の状態を形成。
- 規定ゲーム数は **100G or 1000G**。
- 規定G振り分け（100G / 1000G）:
  - 設定1: 25.0 / 75.0%
  - 設定2: 25.0 / 75.0%
  - 設定3: 30.1 / 69.9%
  - 設定4: 30.1 / 69.9%
  - 設定5: 30.1 / 69.9%
  - 設定6: 35.2 / 64.8%
- 最大天井は有利区間移行後1000GでAT。
- 正確な内部ハマリG数は7セグカウンタで確認可能とする解析あり。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_RESET_VS_POWER_CYCLE_CONTRACT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **天井RESET / 有利区間RESET / 内部状態クリア**。
- 当時解析では「全ての状態をクリア」と明記。
- 朝一の表示G数カウンタもリセット。

### carryOverBehavior
- 据え置きは、設定変更を伴わない電源OFF→ON契約に基づき **天井進行・有利区間をCARRY_OVER** と整理。
- 据え置き単独条件で表モード / 裏モード / 通常高確超高確を個別に直接列挙した本機固有資料は今回固定できず、細部は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONのみでは **天井CARRY_OVER / 有利区間CARRY_OVER**。
- 表示上のG数カウンタは「1」から再カウントするが、規定ゲーム数は内部的に保持される。
- 内部状態の個別項目をどこまで保持するかは、天井・有利区間以外について直接資料が不足するため推測補完しない。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **INTERNAL_CARRY_OVER**。
- 純電断では表示カウンタだけ1Gスタートとなるため、見た目の表示と内部規定G進行を分離する。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認されていない。
- 設定変更後も有利区間移行時に規定ゲーム数100G / 1000Gを抽選する通常契約。
- 設定1でも100G選択率25.0%、設定6で35.2%。これは設定変更専用の優遇テーブルではなく、公開されている規定ゲーム数振り分けとして保存。

### modeAfterReset
- 設定変更時は「全ての状態をクリア」とされるため、既存状態は引き継がない。
- 設定変更後の表モード / 裏モード初期振り分けを独立した朝一専用数値として示す資料は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き / 純電断時の各モード個別引継ぎ契約も `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時は既存状態をクリア。
- 通常 / 高確 / 超高確の朝一専用初期振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 電断時の状態個別保持は天井・有利区間ほど直接的な記載がなく `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 有利区間ランプによる朝一判別は当時主要資料で「調査中」で、確定条件を置かない。

### resetBenefits
- 設定変更固有の天井短縮、朝一専用モード優遇、朝一専用AT優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 100G規定G選択率は高設定ほど上がるが、設定変更専用値ではない。

### resetPenalties
- 設定変更で前日の天井進行と有利区間を消去。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 電源OFF→ONだけでも表示G数カウンタは1から再スタートするため、表示1Gだけでは設定変更を確定できない。
- 純電断は内部規定Gを保持するため、前日G数と当日挙動を組み合わせれば据え置き推測材料になる。
- 有利区間ランプ判別は主要当時資料で「調査中」。
- 本機固有ガックン条件・発生率は表記揺れ、型式、メーカー、朝一、設定変更、リセット、据え置き、電源OFF ONで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 最大天井: **1000G**。
- 規定G振り分け 100G / 1000G:
  - 設定1: **25.0 / 75.0%**
  - 設定2: **25.0 / 75.0%**
  - 設定3: **30.1 / 69.9%**
  - 設定4: **30.1 / 69.9%**
  - 設定5: **30.1 / 69.9%**
  - 設定6: **35.2 / 64.8%**
- 上記は設定変更専用テーブルではなく、通常の規定ゲーム数抽選値。
- 設定変更専用の朝一モード振り分け / 内部状態振り分け / ガックン率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11に `みうのおしゃべりパチスロ / みうスロ / SみうスロM1 / 岡崎産業 / 9S0093 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 規定ゲーム数 / 表モード / 裏モード / 状態 / ガックン / 有利区間 / 有利区間ランプ` を組み替え、岡崎産業公式、遊技日本、P-WORLD遊技通信、パチビー、HAZUSE、P-WORLD機種DB、1geki、ちょんぼりすた、スロパチクエスト、ぱちんこキュレーション等を横断。設定変更時の天井・有利区間RESET、状態クリア、電断時の天井・有利区間CARRY_OVER、表示カウンタだけ1スタート、100/1000G振り分けは固定できた。朝一専用モード/状態数値、有利区間ランプ判別、ガックンは十分な再探索後も固定できず推測補完していない。

## conflicts
- `NONE_CONFIRMED`。
- AT初当たり1/283.9〜1/129.3は「通常時100G消化後から算出」という定義注記があるため、無注記の実質初当たり値と混同しない。

## sources
取得日: 2026-09-11

1. 岡崎産業 公式サイト
   - https://okazakisangyo.com/
   - 2020年機種として「みうのおしゃべりパチスロ」の製品存在を確認。
   - reliability: OFFICIAL
2. 遊技日本 — 機種ページ/PV公開
   - https://yugi-nippon.com/pachinko-new-machine/post-32978/
   - 岡崎産業公式機種ページ公開、製品発表を確認。
   - reliability: INDUSTRY
3. P-WORLD / 遊技通信 — 東京都公安委員会検定通過状況
   - https://news.p-world.co.jp/articles/12728/yugitsushin
   - 型式SみうスロM1、検定番号9S0093を確認。
   - reliability: INDUSTRY
4. パチビー — 2020-01-30プレス発表会
   - https://www.pachibee.jp/pparticles/view/1228
   - 純増約2.7枚/G、AT/ST構造、2020-03-16導入予定を確認。
   - reliability: INDUSTRY
5. PiDEA X / 遊技日本転載 — 発表会詳細
   - https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E3%80%8C%E3%81%BF%E3%81%86%E3%81%AE%E3%81%8A%E3%81%97%E3%82%83%E3%81%B9%E3%82%8A%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8D%E6%A9%9F%E7%A8%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A8pv%E3%81%8C%E5%85%AC%E9%96%8B%EF%BC%8F%E5%B2%A1%E5%B4%8E%E7%94%A3%E6%A5%AD
   - BB60G約160枚 / REG30G約80枚 / SP111〜555G / ST32Gを確認。
   - reliability: INDUSTRY
6. HAZUSE
   - https://hazuse.com/machine/pachislot/9S0093/
   - 型式、基本AT仕様、REG30G約80枚等を照合。
   - reliability: ANALYSIS_HIGH
7. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9144
   - 6号機AT、純増2.7枚/G、BIG60G約160枚、REG30G約80枚、SP111〜555Gを照合。
   - reliability: INDUSTRY_DATABASE
8. 1geki 基本/設定判別
   - https://1geki.jp/slot/s_miusuro/
   - https://1geki.jp/slot/s_miusuro/0/
   - 設定別AT初当たり、出玉率、100/1000G規定Gを照合。
   - reliability: ANALYSIS_HIGH
9. ちょんぼりすた
   - https://chonborista.com/slot/okazaki-slot/104548/
   - 導入日、設定別スペック、天井、朝一設定変更/電断比較、表示カウンタ挙動を確認。
   - reliability: ANALYSIS_HIGH
10. スロパチクエスト 天井/朝一
   - https://www.slopachi-quest.com/article/miu-oshaberislot-tennjou/
   - 設定変更=天井/有利区間RESET、電断=引継ぎ、表示1スタートだが内部G数保持を照合。
   - reliability: ANALYSIS_HIGH
11. スロパチクエスト 設定差
   - https://www.slopachi-quest.com/article/miu-oshaberislot-settei/
   - 100G/1000G全設定振り分けを確認。
   - reliability: ANALYSIS_HIGH
12. ぱちんこキュレーション
   - https://www.pachinko-curation.com/1578/
   - 型式、導入日、出玉率、純増、ベース、通常状態構造を照合。
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定2・3の50枚あたり個別G数。
- 設定変更後の表モード / 裏モード初期振り分け。
- 設定変更後の通常 / 高確 / 超高確初期振り分け。
- 据え置き / 純電断時の各モード・各状態の個別直接契約。
- 朝一有利区間ランプによる確定判別条件。
- 本機固有ガックン条件・発生率。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorStatus: PARTIAL_RESEARCH_EXHAUSTED
- overallReliability: ANALYSIS_HIGH_WITH_OFFICIAL_AND_INDUSTRY_CONFIRMATION
