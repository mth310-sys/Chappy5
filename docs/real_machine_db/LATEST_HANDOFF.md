更新日: 2026-09-14

## 現在地点
- recordCount: **1657**
- latestRecordAdded: **スマスロ真・北斗無双 — No.1657**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-07-08_smaslot-shin-hokuto-musou.md`
- chronologicalFrontier: **2024-07-08**
- frontierLatestMachine: **スマスロ真・北斗無双 — No.1657**
- schema: **resetBehavior v0.7**
- status: **2024-07-08_BOUNDARY_OPEN_1_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1656 `沖ドキ！BLACK` を確認して開始。
- README規定どおり、旧INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 次の未処理No.1657 `スマスロ真・北斗無双` を性能コア + resetBehavior v0.7で新規登録。
- 型式・導入日はHAZUSE、公安委員会検定通過を扱う業界記事、複数解析で照合。
- resetBehaviorは必勝本の設定変更/電源OFF ON直接比較、なな徹朝一/有利区間、HAZUSE等を横断。
- ガックン、設定変更時モードC/D/天国/超天国の個別振り分けは検索語・型式・メーカーを変えた再探索後も固定できた公開値のみ欠損扱い。

## No.1657 — スマスロ真・北斗無双
- path: `docs/real_machine_db/machines/2024-07-08_smaslot-shin-hokuto-musou.md`
- manufacturer: **ロデオ製造 / サミーブランド**
- formalModel: **Lスマスロ真北斗無双FS** / inspectionCode: **3S1512**
- releaseDate: **2024-07-08**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 疑似ボーナス+ST**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 101.8 / 106.6 / 110.5 / 114.9%**
- bonusInitial: **1/381.1 / 1/379.1 / 1/361.6 / 1/349.3 / 1/338.6 / 1/320.5**
- base: **約31.0G/50枚（設定1）**
- netIncrease: **約5.0枚/G**
- basicPayout: **幻闘BONUS約100枚 / 真・北斗無双BONUS約300枚 / 七星チャージ50〜500枚**
- ST: **幻闘RUSH 30G 約55% / 真・幻闘RUSH 40Gまたは50G 約77% / 極・幻闘RUSH 77G 約96%**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1657 resetBehavior v0.7
- setting change: **有利区間RESET、天井宿命再抽選、モード再抽選でC以上濃厚、状態再抽選、無双目高確RESET、ユリアポイント再抽選。各種カウンタ表示RESET。**
- carry over: **据え置きは天井宿命・モード・状態等を内部引継ぎ。各種カウンタも内部引継ぎ。**
- power OFF→ON: **天井宿命・モード・状態・無双目高確・ユリアポイントをCARRY_OVER。伝承奥義/北斗無双/幻闘PTの表示はリセットされるが内部値は引き継ぐ。**
- ceiling: **通常最大1536宿命+α（平均約768G）→設定変更後最大1024宿命+α（平均約512G）へ短縮。C以上濃厚。**
- mode: **A/B/C/D/天国/超天国。設定変更後はC以上濃厚。個別振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- advantageous section: **設定変更でRESET。設定変更以外の有利区間リセット時は極・幻闘RUSH恩恵があるが、設定変更時は対象外。**
- additional morning benefits: **設定変更後数ゲーム間のみ激アツ目成立の可能性（成立時ユリアBONUS直撃）、ユリアポイント初期抽選、有利区間移行時ブルーセブンモード抽選。**
- detection: **なな徹はリセット判別「現在調査中」。設定変更時は実戦上北斗神拳ステージ。ランダム加算があるためカウンタ差のみで確定不可。本機固有ガックンは再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GAKKUN_UNVERIFIED**

### 公開朝一関連数値 — No.1657
- 通常最大天井: **1536宿命+α / 平均約768G**
- 設定変更後最大天井: **1024宿命+α / 平均約512G**
- モードD最大: **640宿命+α / 平均約320G**
- 天国/超天国最大: **256宿命+α / 平均約128G**
- 有利区間移行時/ST終了時ブルーセブンモード移行率:
  - 設定1 **0.7%**
  - 設定2 **0.7%**
  - 設定3 **0.8%**
  - 設定4 **1.0%**
  - 設定5 **1.1%**
  - 設定6 **1.2%**
- 有利区間移行時レア小役のブルーセブンモード追加移行率:
  - 無双目/チャンスベル **10.2%**
  - チェリー/スイカ **20.3%**
  - チャンス目 **33.6%**

## conflicts / quality notes
- No.1657: ユリアBONUS通常時直撃の設定5確率は、なな徹 `1/5048.0` とP-WORLD `1/5084.0` で競合。性能コア必須・リセット専用値ではないため平均化せずCONFLICT保持。
- No.1657: 設定変更時モードはC以上濃厚まで複数一致。C/D/天国/超天国の個別振り分け率は公開固定値を確認できず、推測しない。
- No.1657: 本機固有ガックンは機種名・型式 `Lスマスロ真北斗無双FS`・ロデオ・サミーと設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンの検索語を変更し再探索後も固定できずUNVERIFIED。
- 2024-06月次件数: 5機列挙と「6機種」市場集計の差は `CONFLICT_JUNE_2024_NEW_MODEL_COUNT_5_VS_6` としてQA debt継続。未知の第6機は推測追加しない。

## 2024-07-01境界 — CANONICAL CLOSED 1/1
1. 沖ドキ！BLACK — No.1656 DONE

## 2024-07-08候補 — OPEN 1/6
1. **スマスロ真・北斗無双 — No.1657 DONE**
2. **L アカメが斬る！2 — 次回No.1658候補**
3. **Lパチスロ戦姫絶唱シンフォギア 正義の歌**
4. **Sバハマ30**
5. **S ご～やちゃんぷる～30φ**
6. **S ご～やちゃんぷる～25φ**

境界監査メモ:
- 前handoffで1geki 2024年7月新台カレンダーの7/8パチスロ6機を確認済み。
- 30φ/25φ派生は全機種方針に従い、正式型式・性能差・市場上の独立導入を確認してから別レコード採番する。
- PB・地域先行・別型式・延期/段階導入を継続監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1657実レコードと本handoffを再取得確認。
2. **No.1658候補 `L アカメが斬る！2`（2024-07-08）** を性能コア + resetBehavior v0.7で処理。
3. その後 `Lパチスロ戦姫絶唱シンフォギア 正義の歌 → Sバハマ30 → S ご～やちゃんぷる～30φ → S ご～やちゃんぷる～25φ` を正式型式・導入日・派生差を監査しながら順に処理。
4. 6機処理後に2024-07-08境界をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定する。
5. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1657 スマスロ真・北斗無双
- HAZUSE: https://hazuse.com/machine/pachislot/3S1512/
- P-WORLD / グリーンべると 検定通過: https://news.p-world.co.jp/articles/27224/greenbelt
- P-WORLD / 遊技通信 発表: https://news.p-world.co.jp/articles/27538/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004284/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4312/1/103421
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/214/kh01.php
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4312/1/102341
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/770/22515/
- なな徹 天井: https://nana-press.com/kaiseki/machine/770/22513/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/770/22516/
- なな徹 ブルーセブンモード: https://nana-press.com/kaiseki/machine/770/23105/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/3S1512/genre/208/
- 1geki 天井・リセット: https://1geki.jp/slot/l_sin_hokutomuso/3/

### 境界監査
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
