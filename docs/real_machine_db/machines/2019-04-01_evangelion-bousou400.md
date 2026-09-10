# No.1275 新世紀エヴァンゲリオン 暴走400

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 新世紀エヴァンゲリオン 暴走400
- manufacturer: ビスティ（製造表記: ジェイビー）
- releaseDateCanonical: 2019-04-01
- generation: 5.9号機
- systemType: A+RT / リアルボーナス + 2段階RT / 技術介入
- formalModelNameCanonical: `パチスロ 新世紀エヴァンゲリオン10j`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | S-BIG | REG | ボーナス合算 | 通常出玉率 | フル攻略時 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/439.8 | 1/524.3 | 1/239.2 | 97.42% | 99.60% |
| 2 | 1/434.0 | 1/524.3 | 1/237.4 | 98.99% | 101.17% |
| 5 | 1/420.1 | 1/496.5 | 1/227.6 | 101.68% | 103.98% |
| 6 | 1/399.6 | 1/414.8 | 1/203.5 | 105.57% | 108.27% |

- SANKYOオンライン博物館、K-Navi、P-WORLD、パチマガスロマガ、ちょんぼりすた系でボーナス確率を照合。
- 出玉率は後期解析で通常値とフル攻略値が分離されたため両方保持する。

### baseGamesPer50
| 設定 | 50枚あたり |
|---:|---:|
| 1 | 43.93G |
| 2 | 45.70G |
| 5 | 48.30G |
| 6 | 52.26G |

- 設定1の丸め値は約44.0G/50枚。

### netIncrease / basicPayout
- S-BIG: **最大407枚**。
- REG: **最大60枚**。
- 全ボーナス後にRT「レイチャレンジ」へ。
- レイチャレンジ: S-BIG後最大20G / REG後最大10G。
- レイチャレンジ中の特殊リプレイ成立でRT「レイチャンス」へ移行。
- レイチャンス: **50G固定**。
- RT純増/Gは比較可能な確定値を複数資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。純増推測はしない。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- AT/ARTではなくリアルボーナス + RTのため、通常時の天井モードや有利区間による初当たり管理はなし。
- RT終了画面に設定示唆があり、特に設定変更後1回目は通常時と選択率が異なる。

## resetBehavior
### settingChangeBehavior
- 設定変更後は、**設定変更後1回目のRT終了画面に専用振り分け**が適用されることを複数解析で確認。
- 天井非搭載のためゲーム数天井リセットは `NOT_APPLICABLE`。
- 設定変更時にRT残G/内部RT状態・成立ボーナス状態をどう扱うかの直接契約は、表記揺れ・型式名・メーカー名・設定変更/リセット/RT/朝一で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き専用のRT残G・ボーナス成立状態・謎パネル進捗等の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後1回目専用の終了画面抽選が存在するため、朝一の最初のRT終了画面は設定変更判別材料になり得るが、単独で変更確定とは扱わない。

### powerCycleBehavior
- 純電源OFF→ON時のRT残G/内部状態/成立ボーナス/謎パネル進捗の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと純電断を同義として推定しない。

### gameCounterReset
- 通常ゲーム数天井なしのため `NOT_APPLICABLE`。
- 謎パネルには通常時のゲーム数による獲得抽選があるが、これは天井ではなく設定推測システム。設定変更時の進捗クリア契約は直接資料を固定できず推定しない。

### ceilingAfterReset
- 天井非搭載。リセット短縮天井なし。`NOT_APPLICABLE`。

### modeAfterReset
- 朝一専用の通常時モードは確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後1回目RT終了画面の専用選択テーブルは存在するため、通常時モードとは分離して `numericResetData` に保存。

### stateAfterReset
- 通常時の高確/低確等の初当たり状態管理を持つAT/ART機ではない。
- RT中電断やボーナス成立中電断を含む機種固有状態契約は直接資料未固定のため `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機は5.9号機A+RTで、通常時初当たりを有利区間で管理する機種ではないため、本DBの朝一有利区間リセット項目は `NOT_APPLICABLE`。

### resetBenefits
- **設定変更後1回目のRT終了画面では高設定確定/示唆パターンの選択率が通常時より上がる設定がある。**
- これは出玉面のリセット恩恵ではなく、客側の設定看破材料としての朝一恩恵。

### resetPenalties
- 出玉面の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後1回目のRT終了画面専用振り分けが主要な朝一判別材料。
- ガックンについて本機固有の発生条件・発生率を固定できる資料は見つからず `PUBLIC_RATE_NOT_FOUND`。
- 天井/有利区間ランプによる変更判別は `NOT_APPLICABLE`。

### numericResetData
設定変更後1回目RT終了画面選択率:

| 設定 | デフォルト | シンジ | アスカ | レイ | アスカ・シンジ・レイ | エヴァ3機 |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 56.25% | 25.00% | 18.75% | 0% | 0% | 0% |
| 2 | 46.25% | 18.75% | 25.00% | 10.00% | 0% | 0% |
| 5 | 46.25% | 25.00% | 18.75% | 5.00% | 2.50% | 2.50% |
| 6 | 46.25% | 18.75% | 25.00% | 5.00% | 2.50% | 2.50% |

- 示唆: シンジ=奇数、アスカ=偶数、レイ=設定2以上、3人=設定5以上相当、エヴァ3機=設定5以上相当（資料表記差は後述）。
- このテーブルは「設定変更後1回目」に限定して保存し、通常RT終了時テーブルや6000G以上消化時テーブルと混ぜない。

## releaseDate / formalModel
- SANKYOオンライン博物館で販売名 `パチスロ 新世紀エヴァンゲリオン 暴走400`、型式名 `パチスロ 新世紀エヴァンゲリオン10j` を確認。
- K-Navi、P-WORLD、当時解析で2019-04-01導入が一致。
- グリーンべるとは2019-03-25記事で3/31納品予定と報道し、4/1稼動と整合。
- 検定番号は型式名・ビスティ・ジェイビー・検定通過等で再探索したが高信頼資料に固定できず欠損維持。

## boundaryAudit
- 2019-04-01群の未処理としてhandoff指定されていた本機をNo.1275で登録。
- 追加監査で `ドンちゃん2` が2019-04-01全国導入（一部地域2019-03-25）として既存mainに未登録と判明。
- 4/1群はこの時点ではCLOSEDにせず、ドンちゃん2を漏れ補完してから再判定する。

## missingFields
- certificationNumber。
- RT純増/Gの比較可能な確定値。
- 設定変更/据え置き/純電断時のRT残G・内部RT状態・ボーナス成立状態の直接契約。
- ガックンの機種固有公開発生率。

## conflicts / qualityNotes
- 出玉率は初期資料でフル攻略値だけが「機械割」として掲載された例がある。後期解析では通常値とフル攻略値が分離されるため、平均せず定義別に保持。
- メーカー表記は資料によりビスティ/ジェイビーが混在。ブランドをビスティ、製造表記をジェイビーとして保持。
- RT終了画面の高設定確定ラインは資料の設定表現に差があるため、数値テーブル自体を正として保存し、示唆文言は補助扱い。

## sources
取得日: 2026-09-11
1. SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/887/ — 販売名/型式、設定別SBB/RB/合算 — reliability: `OFFICIAL`
2. グリーンべると — https://web-greenbelt.jp/00011179/ — 2019-03-25記事、A+RT、SBB最大407枚、REG最大60枚、RT構成、3/31納品予定、主要確率/出玉率端点 — reliability: `INDUSTRY_CONTEMPORARY`
3. K-Navi — https://p-kn.com/slot/3221/ — 2019-04-01導入、SBB/RB、RT構成 — reliability: `MACHINE_DB_HIGH`
4. P-WORLD — https://www.p-world.co.jp/machine/database/8921 — A+RT、設定別確率、最大407/60枚、RT20/10G→50G — reliability: `INDUSTRY_MACHINE_DB`
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/35/c.php — 設定別50枚G数 — reliability: `ANALYSIS_HIGH`
6. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/35/en04.php — 設定変更後1回目RT終了画面専用振り分け — reliability: `ANALYSIS_HIGH_RESET_NUMERIC`
7. ちょんぼりすた — https://chonborista.com/slot/bisty-slot/81057/ — 通常/フル攻略出玉率、設定変更後1回目終了画面数値、天井非搭載 — reliability: `ANALYSIS_HIGH_CROSSCHECK`
8. すろぱちくえすと — https://www.slopachi-quest.com/article/eva-bousou400/ — 2019-04-01、A+RT、設定1約44G/50枚、天井なし、設定変更後終了画面仕様 — reliability: `ANALYSIS_CROSSCHECK`
9. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/eva400 — 型式名、2019-04-01、通常/攻略出玉率レンジ、RT構成 — reliability: `ANALYSIS_CONTEMPORARY`
