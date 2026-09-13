更新日: 2026-09-14

## 現在地点
- recordCount: **1655**
- latestRecordAdded: **スマスロ ストリートファイターV 挑戦者の道 — No.1655**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-06-03_l-street-fighter-v-challenger-road.md`
- chronologicalFrontier: **2024-06-03**
- frontierLatestMachine: **スマスロ ストリートファイターV 挑戦者の道 — No.1655**
- schema: **resetBehavior v0.7**
- status: **2024-06-03_BOUNDARY_CANONICAL_CLOSED_5_OF_5_WITH_MONTHLY_COUNT_CONFLICT_5_VS_6**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1654 `スマスロ痛いのは嫌なので防御力に極振りしたいと思います。` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 次の未処理No.1655 `スマスロ ストリートファイターV 挑戦者の道` を性能コア + resetBehavior v0.7で新規登録。
- 2024-06-03 canonical候補5機は全処理完了。P-Summa等の新台カレンダーは6月パチスロ新台5機・全て6/3導入で一致する一方、別の業界市場集計に「6月導入6機種」とする月次件数があるため、未知の第6機を推測追加せず件数CONFLICTとしてQA debtを残した。
- 次の全国導入本線は2024-07-01 `沖ドキ！BLACK`。1gekiの2024年7月カレンダーで7/1はパチスロ1機、7/8から複数機が続くことを確認。

## No.1655 — スマスロ ストリートファイターV 挑戦者の道
- path: `docs/real_machine_db/machines/2024-06-03_l-street-fighter-v-challenger-road.md`
- manufacturer: **エンターライズ**
- formalModel: **Lストリートファイター5ZD** / inspectionCode: **4S0055**
- releaseDate: **2024-06-03**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 疑似ボーナス主体・技術介入型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 市場想定機械割: **97.7 / 98.3 / 99.6 / 101.0 / 102.8 / 105.3%**
- 完全攻略時機械割: **103.4 / 104.0 / 105.2 / 106.6 / 108.1 / 110.6%**
- BATTLE BONUS: **1/296.9 / 1/291.8 / 1/280.8 / 1/268.3 / 1/254.3 / 1/234.5**
- 樽BONUS: **1/363.2 / 1/361.1 / 1/353.8 / 1/347.8 / 1/338.6 / 1/323.1**
- ボーナス合算: **1/163.3 / 1/161.4 / 1/156.6 / 1/151.5 / 1/145.2 / 1/135.9**
- base: **約35G/50枚**
- netIncrease: **疑似ボーナスAT 約3.6枚/G**
- basicPayout: **BATTLE BONUS平均約400枚 / 樽BONUS約106枚 / BATTLE BONUS影平均約1350枚**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1655 resetBehavior v0.7
- setting change: **有利区間RESET、内部状態RESET/再抽選、波動高確RESET、ミッションモード再抽選、実戦上は道場ステージ開始。天井非搭載。**
- carry over: **据え置きは有利区間・内部状態CARRY_OVER。波動高確/ミッションモードの据え置き専用直接比較表は今回固定できずUNVERIFIEDを残す。**
- power OFF→ON: **内部状態・波動高確・ミッションモードCARRY_OVER。開始ステージは1geki等が道場、必勝本は調査中でCONFLICT。純電断単独の有利区間契約はUNVERIFIED_AFTER_RESEARCH。**
- ceiling: **天井機能非搭載。通常/設定変更後ともN/A。**
- mode/state: **設定変更時/有利区間移行時にミッションモード再抽選。内部状態と波動高確は設定変更でRESET、純電断でCARRY_OVER。**
- advantageous section: **設定変更RESET / 据え置きCARRY_OVER。純電断単独契約は直接資料不足でUNVERIFIED。**
- detection: **設定変更・据え置きとも道場開始とする朝一資料があり、開始ステージ単独では判別不可。本機固有ガックンは再探索後もUNVERIFIED。天井非搭載のため天井位置判別も不可。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_POWER_CYCLE_ADVANTAGEOUS_SECTION_AND_GAKKUN_UNVERIFIED**

### 公開朝一数値 — No.1655
- ミッションモード設定変更時振り分け:
  - 通常A **50.0%**
  - 通常B **37.5%**
  - バトル **11.7%**
  - 強バトル **0.4%**
  - 豪鬼バトル **0.4%**
- 設定変更後短縮天井: **N/A（天井非搭載）**
- 朝一特定G以内の固定ボーナス当選率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
- No.1655: 市場想定機械割は必勝本・HAZUSE・1gekiが `97.7 / 98.3 / 99.6 / 101.0 / 102.8 / 105.3%` で一致。一方、一部解析整理は設定3〜6に `102.6 / 104.0 / 105.7 / 108.2%` を掲載。定義差の可能性を排除できないため平均せず `CONFLICT_MARKET_PAYOUT_SETTINGS3_TO_6` を保持。
- No.1655: 純電源OFF→ON時の開始ステージは複数解析が道場とする一方、必勝本比較ページは「現在調査中」。`CONFLICT_POWER_CYCLE_START_STAGE`。
- No.1655: 本機固有ガックン、純電断単独の有利区間契約は検索語・資料系統変更後も固定できずUNVERIFIED_AFTER_RESEARCH。
- 2024-06月次件数: 新台カレンダー/機種列挙は5機で一致するが、市場集計資料に6機種表記あり。実機名を特定できないため `CONFLICT_JUNE_2024_NEW_MODEL_COUNT_5_VS_6` として保持し、時系列本線は確認済み5機で閉じる。

## 2024-06-03境界 — CANONICAL CLOSED 5/5
1. L聖闘士星矢 海皇覚醒 CUSTOM EDITION — No.1651 DONE
2. L ToLOVEるダークネス — No.1652 DONE
3. アオハル♪操 A-LIVE — No.1653 DONE
4. スマスロ痛いのは嫌なので防御力に極振りしたいと思います。 — No.1654 DONE
5. スマスロ ストリートファイターV 挑戦者の道 — No.1655 DONE

境界監査メモ:
- P-Summa 2024-06-01は「今月のパチスロ新台は5機種とも6月3日」と明記し、上記5機を列挙。
- 6月中旬以降の主要新台カレンダーでも追加パチスロ全国導入を確認できず、次の全国導入本線は2024-07-01 `沖ドキ！BLACK`。
- ただし別の業界市場集計の「6月導入6機種」という件数とは不一致。PB・地域先行・別型式・増産/追加販売等の定義差を将来QAで再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1655実レコードと本handoffを再取得確認。
2. **No.1656候補 `沖ドキ！BLACK`（2024-07-01、ミズホ）** を性能コア + resetBehavior v0.7で処理。
3. `沖ドキ！BLACK` は一部地域7/8開始表記もあるため、全国本線7/1 / 地域差をreleaseDateEvidenceで分離して保持する。
4. その後2024-07-08群を導入日・PB・別型式・地域先行・延期/段階導入まで境界監査して順番を確定する。
5. 2024-06の5/6件数CONFLICTはQA debtとして保持し、機種名が一次/業界資料で固定できるまで未知の第6機を追加しない。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1655 スマスロ ストリートファイターV 挑戦者の道
- P-WORLD NEWS / 遊技日本: https://news.p-world.co.jp/articles/27230/nippon
- P-WORLD NEWS / 遊技通信: https://news.p-world.co.jp/articles/27655/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/4S0055/
- K-Navi: https://p-kn.com/slot/4152/
- P-WORLD: https://www.p-world.co.jp/machine/database/10052
- パチ&スロ必勝本 基本/技術介入: https://p.hisshobon.jp/vpage/2628/3
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4318/1/102612
- なな徹 朝一/リセット: https://nana-press.com/kaiseki/machine/758/21741/
- 1geki 機種トップ: https://1geki.jp/slot/l_sfvc/
- 1geki 天井/朝一: https://1geki.jp/slot/l_sfvc/3/
- P-Summa 導入/実戦整理: https://psumma.jp/pachislo/61534/

### 境界監査
- P-Summa 2024年6月新台5機: https://psumma.jp/pachislo/61472/
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
- ユニバーサル公式 沖ドキ！BLACK: https://universal-777.com/product/slot/okidoki_black/
