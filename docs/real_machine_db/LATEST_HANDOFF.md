更新日: 2026-09-13

## 現在地点
- recordCount: **1619**
- latestRecordAdded: **L 仮面ライダー 7RIDERS — No.1619**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-01-09_kamen-rider-7riders.md`
- chronologicalFrontier: **2024-01-09**
- frontierLatestMachine: **L 仮面ライダー 7RIDERS — No.1619**
- schema: **resetBehavior v0.7**
- status: **2024-01-09_GROUP_OPEN_4_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1618 `Lパチスロ マクロスフロンティア4`、遡及QA対象 `2007-07-09_genju-haou-t.md` を確認して開始。
- INDEXは旧表示を含むためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2024-01-09 canonical群5機の4機目、No.1619 `L 仮面ライダー 7RIDERS` を性能コア + resetBehavior v0.7で追加。
- 遡及QA `幻獣覇王` は既存 `COMPLETE_CORE` を維持し、resetBehaviorのみ `PARTIAL_RESEARCH_EXHAUSTED` として正式更新。

## No.1619 — L 仮面ライダー 7RIDERS
- path: `docs/real_machine_db/machines/2024-01-09_kamen-rider-7riders.md`
- manufacturer: **SUN SUN SUN（京楽産業.グループ / 販売: 京楽産業.）**
- formalModel: **Lパチスロ仮面ライダーUJA**
- inspectionCode: **330233（HAZUSE掲載。公的検定原典の番号再照合待ち）**
- releaseDate: **2024-01-09**
- settings: **1 / 2 / 4 / 5 / 6 / L**
- 機械割: **97.6 / 98.5 / 104.0 / 107.3 / 111.9%**（L固定値未確認）
- AT初当たり: **1/297.7 / 1/291.4 / 1/253.2 / 1/233.6 / 1/225.2**
- base: **約34G/50枚**
- 純増: **AT「BATTLE RUSH」約2.6枚/G**
- basic payout: **初回20G / 2セット目以降平均40G / 初戦除外継続約77% / 上位AT約84%**
- normal ceiling: **999G+α / 7周期**
- setting change: **有利区間・ゲーム数天井・周期天井・撃破ポイントRESET / 499G+α・3周期へ短縮 / 初期怒りポイント抽選 / 休憩室開始**
- carry over: **有利区間・ゲーム数天井・周期天井・撃破ポイントCARRY_OVER**
- power OFF→ON: **休憩室開始 / 撃破ポイントCARRY_OVER / 有利区間内持ちメダル数CARRY_OVER。全内部カウンタの同一資料による網羅確認は未完**
- reset detection: **朝一499G+α超・3周期超のAT非当選は据え置き濃厚材料。開始ステージ単独では判別困難**
- gackun: **UNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_AND_UNVERIFIED_GACKUN**

## resetBehavior公開朝一数値
- 通常ゲーム数天井 **999G+α → 設定変更後499G+α**。
- 通常周期天井 **7周期 → 設定変更後3周期**。
- 有利区間移行時の初期怒りポイント抽選をレコードに保存。
- その他成立時: **0pt 8.0% / 10pt 12.0% / 30pt 20.0% / 50pt 21.0% / 70pt 21.0% / 90pt 18.0%**。
- 弱レア役・強レア役・中段チェリー時の公開振り分けもレコードに保存済み。

## reset遡及QA — 幻獣覇王
- path: `docs/real_machine_db/machines/2007-07-09_genju-haou-t.md`
- coreStatus: **COMPLETE_CORE（維持）**
- qaResetBehavior: **PARTIAL_RESEARCH_EXHAUSTED**
- 設定変更/据え置き/純電源OFF→ON時のRT「巫女チャンス」残G、成立済みボーナス、内部状態、機種固有ガックンを、型式名・メーカー名・RT名・設定変更/電断/キャパシタ等へ検索語を変え、当時解析・旧DB・中古実機・回顧資料まで再探索。
- 正常個体の機種固有契約を固定できる資料は追加発見できず、一般的5号機挙動から推測補完しない。
- 中古個体の「キャパシタ切れ」記述は個体劣化情報のため、正常時の純電断契約の根拠には不採用。
- 有利区間は制度導入前のため **NOT_APPLICABLE**。

## 2024-01-09群 — OPEN 4/5 canonical
1. 吉宗RISING — No.1616 DONE
2. スマスロ バイオハザード ヴィレッジ — No.1617 DONE
3. Lパチスロ マクロスフロンティア4 — No.1618 DONE
4. L 仮面ライダー 7RIDERS — No.1619 DONE
5. パチスロ武装神姫 — NEXT

境界監査:
- グリーンべると/P-WORLDの2024-01-09新台スケジュールで吉宗RISING / バイオハザード ヴィレッジ / マクロスフロンティア4 / 仮面ライダー 7RIDERSの4機を確認。
- コナミアミューズメント公式が `パチスロ武装神姫` のホール稼働開始を2024-01-09と明記するため5機目としてcanonical群に含める。
- よって旧4機扱いには戻さず、現在4/5 OPEN。武装神姫処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
1. 最新mainを再同期し、No.1619 / 幻獣覇王QA / 本handoffの反映を再取得確認。
2. **No.1620候補 `パチスロ武装神姫`** を性能コア + resetBehavior v0.7で処理。
3. No.1620処理後、2024-01-09群をPB・別型式・地域先行・延期/段階導入まで再監査しCLOSED判定。
4. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。**次QAカーソルは、最新mainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する**。推測でファイル名を固定しない。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集する。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-13
### L 仮面ライダー 7RIDERS
- 京楽公式 NEWS: https://www.kyoraku.co.jp/news/detail/725
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/26285/nippon
- グリーンべると 検定情報: https://web-greenbelt.jp/post-75296/
- なな徹 基本スペック: https://nana-press.com/kaiseki/machine/654/18559/
- なな徹 朝一/設定変更/有利区間: https://nana-press.com/kaiseki/machine/654/18621/
- 一撃 天井/設定変更/電断/撃破ポイント: https://1geki.jp/slot/l_kr7riders/3/
- HAZUSE 型式/検定番号: https://hazuse.com/hd/sx0063/
- パチ＆スロ必勝本 設定別AT/機械割: https://p.hisshobon.jp/machine/4227/1/99961

### 2024-01-09群監査
- P-WORLD / グリーンべると新台スケジュール: https://news.p-world.co.jp/articles/26523/greenbelt
- コナミアミューズメント 武装神姫アプリ告知（2024-01-09ホール稼働開始を明記）: https://www.konami.com/amusement/corporate/ja/topics/20231225/

### 幻獣覇王 reset QA
- HAZUSE: https://hazuse.com/i/data/genjuhaou/top.htm
- 中一商事: https://www.nakaiti.com/html/igt002.html
- パチマガスロマガ旧ページ群: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/45/a.php
- Yahoo!フリマ中古実機個体（正常時契約の根拠には不採用）: https://paypayfleamarket.yahoo.co.jp/item/z641187040

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。