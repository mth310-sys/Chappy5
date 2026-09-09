更新日: 2026-09-10

## 現在地点
- recordCount: **1175**
- latestRecordAdded: **コンチネンタルゼロ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-19_continental-zero.md`
- chronologicalFrontier: **2018-02-19**
- frontierLatestMachine: **コンチネンタルゼロ — No.1175**
- schema: **resetBehavior v0.7**
- status: **2018-02-19_GROUP_CLOSED_3_OF_3_CALENDAR_CONFIRMED_PROCESSED_WITH_RETROACTIVE_2018-02-12_13_OMISSION_PENDING**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1174 `超速回胴 鬼若弁慶` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1174件 / chronologicalFrontier 2018-02-19 / 2/19群OPEN 2/3処理済み**。
- handoff指定の次の未処理 `コンチネンタルゼロ` をNo.1175としてperformance core + resetBehavior v0.7で追加。
- 2/19群は `パチスロ GATE` / `超速回胴 鬼若弁慶` / `コンチネンタルゼロ` の3機を処理済み。K-Navi/HAZUSE系の既確認同日群を完走したため群CLOSED扱い。
- 月内境界監査で `トリプルクラウンZEROII SECOND EDITION` のexact dayを再探索した結果、HAZUSEは**2018-02-12**、DMMぱちタウンは**2018-02-13**を掲載。従来handoffでは「月単位掲載・exact day未確定」だったため、これは2/19群の次へ進む前に回収すべき遡及未処理機種。次回No.1176候補として最優先。

## No.1175 — コンチネンタルゼロ
- path: `docs/real_machine_db/machines/2018-02-19_continental-zero.md`
- manufacturer: ユニバーサルブロス
- releaseDateCanonical: **2018-02-19**
- generation/system: 5.9号機世代 / ノーマルA / 完全告知 / リアルボーナス
- formalModelName: `コンチネンタルゼロZZ`
- certificationNumber: `7S1397`
- 機械割: **97.1 / 98.6 / 100.8 / 103.7 / 106.7 / 110.7%**
- BIG: **1/278.9 / 276.5 / 267.5 / 260.1 / 248.2 / 234.9**
- REG: **1/431.2 / 385.5 / 360.1 / 343.1 / 319.7 / 282.5**
- 合算: **1/169.3 / 161.0 / 153.5 / 147.9 / 139.7 / 128.3**
- 50枚ベース: **約35G**、設定別 **35.3 / 35.5 / 35.9 / 36.2 / 36.7 / 37.2G**
- BIG 312枚 / REG 最大104枚
- 天井: **なし**

### resetBehavior v0.7
- 天井・ゲーム数解除・AT/ART/CZは非搭載のため、それらに対する設定変更/短縮天井はN/A。
- HAZUSEと期待値見える化で、REG中設定示唆が参照する**総ゲーム数は設定変更時にRESET、純電源OFF→ONでもRESET**することを照合。
- この総ゲーム数は天井カウンタではなくREG設定示唆用の累積ゲーム数なので、`gameCounterReset`内で別カウンタとして保存。
- 電源OFF→ONでもRESETするため、このカウンタ単独では設定変更判別不能。
- 設定変更時/純電断時の成立済みボーナス・低レベル内部状態・初期出目は本機固有の直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 据え置きを純電断と独立条件で固定した本機固有資料は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- ガックン発生条件/確率、初期出目、ランプ等の確定変更判別は再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の初当たり率、モード振り分け、短縮天井、主要出玉恩恵/不利は`NONE_CONFIRMED_AFTER_RESEARCH`またはN/A。

### 朝一/公開数値
- REG中告知ランプはREG当選時の総ゲーム数帯で設定示唆内容が変わる。
- HAZUSE: 1–999Gで点灯→設定5以上濃厚、1000–2999G→設定2以上濃厚、3000–4999G→設定3以上濃厚、5000–5999G→設定4以上濃厚、6000G以上→設定4以上濃厚。
- 期待値見える化は5000–5999Gを「設定5以上確定」とするため、この帯のみ`CONFLICT_REG_HINT_5000_5999G`として平均せず双方保持。
- resetBehavior上の重要点は、総ゲーム数RESET契約自体は両資料で一致すること。

### performance conflict監査
- 後年の5号機クロニクルにA+RT / BIG最大259枚等の記載があるが、ユニバーサル公式系、P-WORLD、HAZUSE、ちょんぼりすた等の当時資料多数は「ボーナスのみで増やすノーマルA」「BIG312枚 / REG104枚」で一致。
- `CONFLICT_RETROSPECTIVE_SYSTEM_DESCRIPTION`として隔離し、当時一次/高信頼解析をcanonicalとした。

## 2018-02-19群監査
1. `パチスロ GATE` — **No.1173 完了**
2. `超速回胴 鬼若弁慶` — **No.1174 完了**
3. `コンチネンタルゼロ` — **No.1175 完了**

- status: `2018-02-19_GROUP_CLOSED_3_OF_3_CALENDAR_CONFIRMED_PROCESSED`
- HAZUSEでも3機の2018-02-19を個別確認済み。
- ただし月内境界監査で2/19より前の未処理 `トリプルクラウンZEROII SECOND EDITION` を発見したため、時系列本線は先へ進めず遡及回収を優先する。

## 新発見 — トリプルクラウンZEROII SECOND EDITION
- HAZUSE: `トリプルクラウンZEROII 2nd EDITION`、型式`トリプルクラウンZ2-30`、検定番号`7S1011`、清龍ゲームジャパン、導入開始 **2018-02-12**。
- DMMぱちタウン: 同型式、導入開始 **2018-02-13(火)**。
- exact dayに1日差があるため、No.1176登録時は平均せず`CONFLICT_RELEASE_DATE_2018_02_12_VS_2018_02_13`として保持し、全国導入週のcanonical方針を資料優先度とカレンダー監査で決める。
- P-WORLDはスペックを掲載しているが最終更新2017-12-16でexact導入日は明示しない。
- 2/19群より前の未処理なので、次回はこれを最優先で回収してから2月後半へ前進する。

## 継続注意事項
- `コンチネンタルゼロ`のREG設定示唆用総ゲーム数RESETを天井RESETと誤認しない。
- ノーマルA機の成立済みボーナス/低レベル状態の設定変更・純電断挙動を一般論から補完しない。
- 後年回顧DBと当時資料が衝突する場合は平均・混合せずCONFLICTとして隔離。
- `トリプルクラウンZEROII SECOND EDITION`は2/12 vs 2/13を要監査。日付を強制統一しない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1175を再取得。
2. **1175件 / chronologicalFrontier 2018-02-19 / 2/19群CLOSED / 2月前半遡及漏れ1機PENDING** を正本として継続。
3. `トリプルクラウンZEROII SECOND EDITION` をNo.1176候補としてperformance core + resetBehavior v0.7で回収。
4. 導入日 **2018-02-12 vs 2018-02-13** を追加資料で監査し、競合ならCONFLICT保持。
5. その後、2018年2月後半の次の未処理日付群を全メーカー・別スペック・地域差まで横断して時系列前進。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1175 コンチネンタルゼロ
- HAZUSE: https://hazuse.com/machine/pachislot/7S1397/
- HAZUSE REG設定示唆: https://hazuse.com/machine/pachislot/7S1397/genre/202/
- P-WORLD: https://www.p-world.co.jp/machine/database/8580
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/54280/
- 期待値見える化: https://slotjin.com/slot-tool/continentalzero/
- 2-9伝説: https://29den.com/continentalzero/
- スロパチネット: https://slopachi-net.com/continental-zero
- ユニバ公式ブログ: https://ameblo.jp/aruzefreaks/entry-12350863770.html
- ユニバーサル公式ニュース: https://www.universal-777.co.jp/news/20180301001385/
- PiDEA: https://www.pidea.jp/articles/%E5%88%9D%E3%81%AE%E3%83%A6%E3%83%8B%E3%83%90%E8%A3%BD%E3%80%8CCR%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%E3%80%8D%EF%BC%86%E4%BC%9D%E7%B5%B1%E3%81%AE%E3%80%8C%E3%82%B3%E3%83%B3%E3%83%81%E3%83%8D%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%BC%E3%83%AD%E3%80%8D%E7%99%BB%E5%A0%B4
- グリーンべると: https://web-greenbelt.jp/00010165/
- 5号機クロニクル: https://5goki.com/universal

### 次候補 / 月内境界監査
- HAZUSE トリプルクラウンZEROII 2nd EDITION: https://hazuse.com/machine/pachislot/7S1011/
- DMMぱちタウン トリプルクラウンZEROⅡ SECOND EDITION: https://p-town.dmm.com/machines/3240
- P-WORLD: https://www.p-world.co.jp/machine/database/8565
