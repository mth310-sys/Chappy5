# バンバンクロス

recordNo: 1297
machineName: バンバンクロス
manufacturer: サボハニ（大都技研グループ）
formalModel: S BANG BANG CROSS SA1
certificationNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2019-08-05
generation: 6号機
systemType: ノーマル / Aタイプ / 技術介入

## payoutRateBySetting

### 完全攻略時

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 100.0% |
| C | 105.8% |
| 5 | 106.5% |
| C+ | 111.8% |

グリーンべると、K-Navi、一撃、ちょんぼりすた等で一致。

### 技術介入条件別の参考値

当時解析では、ビタ押し60%等の条件を置いた参考値として設定1 97.3%、C 100.7%、C+ 105.3%を掲載。設定5の同条件値は当時「調査中」とする資料が多い。別解析ではビタ押し100/80/60%ごとのシミュレート値も存在し、条件定義が異なるため完全攻略値と混同しない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY

## initialHitBySetting

| 設定 | BIG | CHALLENGE BONUS | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/324.4 | 1/324.4 | 1/162.2 |
| C | 1/762.0 | 1/104.5 | 1/91.9 |
| 5 | 1/278.9 | 1/322.8 | 1/149.6 |
| C+ | 1/697.2 | 1/95.0 | 1/83.6 |

K-Navi、ちょんぼりすた、スロパチクエスト、複数当時解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約45G/50枚。

複数当時解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- NOT_APPLICABLE（AT/ART/RT非搭載のノーマルタイプ）。

## basicPayout

- BIG BONUS: 技術介入成功時 最大259枚。
- CHALLENGE BONUS: 技術介入成功時 最大112枚。

グリーンべると、P-WORLD、K-Navi等で一致。

## modeSpecificMinimumData

- 設定1 / C / 5 / C+ の4段階設定。
- 設定C/C+はCHALLENGE BONUS出現率を大幅に高めた技術介入特化設定。
- 通常時はノーマルMODE / 小役告知MODE / チャンス告知MODEを任意選択できるが、AT機のような内部モード管理ではない。
- 天井: 非搭載。
- 全国導入基準日は2019-08-05。愛媛県のみ新台入替自粛の影響で2019-07-22から先行導入とする当時解析あり。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_HARDWARE_DETAILS
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 天井・AT/ART/CZ・有利区間による朝一状態を持たないノーマル機。設定変更専用の短縮天井、朝一高確、ボーナス当選優遇は確認されない。設定変更時の本機固有リール初期位置や成立済みボーナスの扱いを直接規定する公開資料は確認できず、推測補完しない。
- carryOverBehavior: 天井G数・AT/ART状態・有利区間はNOT_APPLICABLE。据え置き時の本機固有リール初期位置や成立済みボーナス状態の直接契約は `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみでの本機固有リール初期位置・成立ボーナス状態を直接規定する公開資料は確認できず `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。天井・通常時内部モード・有利区間はNOT_APPLICABLE。
- gameCounterReset: NOT_APPLICABLE（ゲーム数天井非搭載）。
- ceilingAfterReset: NOT_APPLICABLE（天井非搭載）。
- modeAfterReset: NOT_APPLICABLE。演出MODEは遊技者選択型であり、朝一内部モードの性能値として扱わない。
- stateAfterReset: AT/ART/CZ等の持越し状態はNOT_APPLICABLE。本機固有の成立ボーナス等の境界状態は公開契約を固定できず推測しない。
- advantageousSectionReset: NOT_APPLICABLE（通常ボーナス主体の6号機ノーマルタイプ）。
- resetBenefits: 設定変更専用の出玉恩恵、短縮天井、朝一専用高確は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 天井・有利区間ランプ等による朝一判別はNOT_APPLICABLE。本機固有の設定変更時リールガックン発生条件・発生率・確定性を直接示す高信頼資料は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。一方、BIG終了画面には「3人娘＝設定上げ確定（設定1否定）」という設定示唆があるが、これは朝一リセット挙動そのものではなく、当日設定推測要素として別扱い。
- publicMorningNumbers: 設定変更専用の朝一当選率・恩恵発生率・短縮天井・朝一モード振り分けはなし / 公開数値なし。

### resetBehavior 再探索メモ

「バンバンクロス / BANG BANG CROSS / S BANG BANG CROSS SA1 / サボハニ / 大都技研」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 有利区間 / リセット恩恵」を組み合わせて再探索。K-Navi、ちょんぼりすた、一撃、スロパチクエスト、スロットセブン、当時ブログ、P-WORLD、業界記事を横断。天井非搭載とノーマル仕様は複数系統で一致したが、設定変更・据え置き・純電断それぞれのリール初期位置/成立済みボーナス境界、本機固有ガックン条件を直接固定できる資料は確認できなかった。一般的な大都系機種の挙動は転記しない。

## qualityNotes / conflicts

- 正式型式は検定通過記事・実機流通資料で `S BANG BANG CROSS SA1` が一致。
- 検定番号は型式名、メーカー名、9S系番号等へ検索語を変更して再探索したが、信頼できる直接紐付けを今回固定できなかったため `UNVERIFIED_AFTER_RESEARCH`。
- メーカー表記は攻略サイトで「大都技研」とする例があるが、検定通過・業界記事では製造元/名義がサボハニ。canonicalは `サボハニ（大都技研グループ）` とする。
- 導入日は全国基準2019-08-05。グリーンべるとは納品8/4予定、一部地域差あり。ちょんぼりすたは愛媛県のみ2019-07-22先行を明記しており、全国導入と地域先行を分離保持。
- BIG/CB最大枚数259/112枚は業界記事・K-Navi・P-WORLDで一致。
- 機械割は技術介入条件で大きく変わるため、完全攻略値とビタ押し60%等の条件付き値を別定義で保持。平均化しない。
- 一部二次資料に設定C BIG `1/732.0` とする記載があるが、K-Navi・ちょんぼりすた・複数解析は `1/762.0` で一致。canonicalは1/762.0、誤記候補としてCONFLICT保持。

## sources

取得日: 2026-09-11

1. グリーンべると — 設定Cはボーナス確率大幅UP～バンバンクロス
   - https://web-greenbelt.jp/00011396/
   - 2019-07-23業界記事。4段階設定、完全攻略機械割、ボーナス合算、BIG最大259枚、CB最大112枚、8/4納品予定を確認。
   - reliability: INDUSTRY
2. K-Navi — バンバンクロス
   - https://p-kn.com/slot/3285/
   - 2019-08-05導入、設定別BIG/CB/合算、完全攻略機械割、最大獲得枚数。
   - reliability: ANALYSIS_HIGH
3. ちょんぼりすた — バンバンクロス
   - https://chonborista.com/slot/daito-slot/88363/
   - 2019-08-05導入、愛媛7/22先行、約45G/50枚、天井非搭載、設定別確率、完全攻略/ビタ60%機械割。
   - reliability: ANALYSIS_HIGH
4. 一撃 — バンバンクロス
   - https://1geki.jp/slot/s_banbanc/
   - 2019-08-05導入、設定別合算、完全攻略出玉率、6号機ノーマル/技術介入仕様。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — バンバンクロス
   - https://www.p-world.co.jp/machine/database/9003
   - サボハニ、6号機ノーマル、BIG最大259枚、CB最大112枚。
   - reliability: DATABASE
6. スロパチクエスト — 設定差まとめ
   - https://www.slopachi-quest.com/article/bangbangcross-settei/
   - 約45G/50枚、天井非搭載、設定別確率、技術介入成功率別機械割。
   - reliability: ANALYSIS_HIGH
7. パチ7系検定通過記事（p-media） — S BANG BANG CROSS SA1
   - https://p-media.info/post-22294/
   - 2019-06-17、型式 `S BANG BANG CROSS SA1`、メーカー名義サボハニを確認。
   - reliability: INDUSTRY_SECONDARY
8. スロット解析.com — 2019年8月新台カレンダー
   - https://slotkaiseki.com/2019_8/
   - 8/5群5機を確認。
   - reliability: DATABASE_SECONDARY
9. 日刊スポーツ — 導入カレンダー 2019-08-09
   - https://www.nikkansports.com/m/amusement/pachislot/news/amp/201908090000270.html
   - 次の主要群2019-08-19に、どき！すろ / 花娘 / OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」を掲載。
   - reliability: INDUSTRY

## missingFields

- 検定番号の高信頼な直接紐付け
- 設定変更 / 据え置き / 純電源OFF→ONそれぞれの本機固有リール初期位置・成立済みボーナス状態の直接公開契約
- 本機固有ガックン発生条件・発生率・確定率

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_HARDWARE_DETAILS

## conflicts

- 設定C BIG: canonical 1/762.0（複数解析一致） vs 一部二次資料1/732.0。平均せず1/732.0を誤記候補CONFLICTとして保持。
- 機械割: 完全攻略値と技術介入成功率別の条件付き値は定義が異なるため別軸保持。
- 導入時期: 全国2019-08-05 vs 愛媛県先行2019-07-22。地域差として両方保持。
