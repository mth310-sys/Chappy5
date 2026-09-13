更新日: 2026-09-13

## 現在地点
- recordCount: **1617**
- latestRecordAdded: **スマスロ バイオハザード™ ヴィレッジ — No.1617**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-01-09_biohazard-village.md`
- chronologicalFrontier: **2024-01-09**
- frontierLatestMachine: **スマスロ バイオハザード™ ヴィレッジ — No.1617**
- schema: **resetBehavior v0.7**
- status: **2024-01-09_GROUP_OPEN_2_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1616 `吉宗RISING` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2024-01-09 canonical群5機の2機目、No.1617 `スマスロ バイオハザード™ ヴィレッジ` を性能コア + resetBehavior v0.7で追加。
- 市場投入型式は `LバイオハザードヴィレッジXA`。2023-09に先行検定通過したエンターライズ製 `ZE` は別型式履歴としてCONFLICT/variant historyを残し、XAの性能へ混入しない。

## No.1617 — スマスロ バイオハザード™ ヴィレッジ
- path: `docs/real_machine_db/machines/2024-01-09_biohazard-village.md`
- manufacturer: **アデリオン（製造） / エンターライズ**
- formalModel: **LバイオハザードヴィレッジXA**
- inspectionCode: **3S1160（ハズセ掲載。公的検定原典の番号照合待ち）**
- releaseDate: **2024-01-09**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **98.2 / 99.1 / 100.9 / 105.4 / 107.7 / 111.0%**
- CB等初当たり: **1/281.5 / 1/275.3 / 1/264.5 / 1/240.3 / 1/229.3 / 1/224.2**
- AT初当たり: **1/445.3 / 1/434.1 / 1/415.7 / 1/372.9 / 1/354.4 / 1/342.8**
- base: **約32.9G/50枚（設定1推定）**
- 純増: **約2.5枚/G**
- basic payout: **AT初当たり時シューティングアタック8G+α・平均上乗せ約100G / AT設定1期待枚数約607枚**
- normal ceiling: **最大750G+α（749G+α表記あり）**
- setting change: **有利区間RESET / 天井RESET / 設定変更専用モード / 状態再抽選 / 天井550G+αへ短縮**
- carry over: **天井・モード・内部状態・有利区間CARRY_OVER**
- power OFF→ON: **天井・モード・内部状態CARRY_OVER。メニュー/開始ステージ表示はUNVERIFIED_AFTER_RESEARCH**
- public morning numeric: **設定変更モード天井550G+α / 150G以内初当たり期待度20%**
- reset detection: **朝一550G+αを超えて規定G契機の初当たり非発生なら据え置き濃厚材料。主要解析の変更判別は調査中**
- gackun: **UNVERIFIED_AFTER_RESEARCH**
- reset-specific internal-state numeric distribution: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- record commit: **5c1b35df2758511a3bfd296ac475dd915feb4dc3**

## 型式CONFLICT / variant history
- 2023-09: エンターライズ `Lバイオハザード ヴィレッジZE` が検定通過。
- 後続: アデリオン `LバイオハザードヴィレッジXA` が別型式として確認。
- 2024-01-09市場投入機はXA。SUNTACの1/9導入実績、ハズセ、当時新台資料がXAで一致。
- ZEの性能値をXAへ自動転記しない。

## 2024-01-09群 — OPEN 2/5 canonical
1. 吉宗RISING — No.1616 DONE
2. スマスロ バイオハザード ヴィレッジ — No.1617 DONE
3. Lパチスロ マクロスフロンティア4 — NEXT
4. L 仮面ライダー 7RIDERS — PENDING
5. パチスロ武装神姫 — PENDING

境界監査:
- グリーンべると2024-01-09新台スケジュールで吉宗RISING / バイオハザード ヴィレッジ / マクロスフロンティア4 / 仮面ライダー 7RIDERSの4機を確認済み。
- コナミアミューズメント公式が `パチスロ武装神姫` のホール稼働開始を2024-01-09と明記するため5機目としてcanonical群へ追加済み。
- PB・別型式・地域先行・延期/段階導入は群CLOSED時に再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1617と本handoffの反映を再取得確認。
2. **No.1618候補 `Lパチスロ マクロスフロンティア4`** から継続。
3. 続いて `L 仮面ライダー 7RIDERS` → `パチスロ武装神姫` を同日群として処理。
4. 5機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2024-01-09群をCLOSED判定する。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集する。
6. 遡及QAカーソルは変更なし。次候補 `2007-07-09_genju-haou-t.md`（幻獣覇王T候補）は、時系列本線と並行する場合のみ最新mainで順序確認後に処理。

## 今回の主要ソース
取得日: 2026-09-13
- パチ＆スロ必勝本 基本スペック/設定変更・電源OFF→ON: https://p.hisshobon.jp/vpage/2578/2
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/661/18441/
- なな徹 モード詳細: https://nana-press.com/kaiseki/machine/661/18444/
- なな徹 シューティングアタック: https://nana-press.com/kaiseki/machine/661/18448/
- なな徹 エンディング/パンデミックチャンス: https://nana-press.com/kaiseki/machine/661/18453/
- ちょんぼりすた 総合解析: https://chonborista.com/slot/enta-slot/199045/
- ぽこすろっと 天井/朝一/モード/リセット: https://www.nankaikoya.jp/biohazard-village-kitaichi/
- スロパチクエスト 朝一設定変更/電源OFF→ON: https://www.slopachi-quest.com/article/biohazard-village-tenjou/
- パチスロメソッド 設定変更/電源OFF→ON: https://slotmethod.jp/archives/18423/
- パチマガスロマガ シューティングアタック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/28/tk01.php
- パチマガスロマガ AT「ハザードRUSH」: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/28/at02.php
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9932
- グリーンべると ZE検定通過: https://web-greenbelt.jp/post-75870/
- ハズセ 市場投入XA型式/検定番号/導入日: https://hazuse.com/hd/3s1160/
- スロパチネット 2024-01-09導入/XA型式: https://slopachi-net.com/slot-newmachinedebut
- SUNTAC 1/9導入実績/XA型式: https://suntac.jp/news/page/16/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
