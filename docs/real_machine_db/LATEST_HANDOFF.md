更新日: 2026-09-13

## 現在地点
- recordCount: **1612**
- latestRecordAdded: **パチスロ琉神－30 スイカバージョン — No.1612**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-06_s-ryujin30-suika-version.md`
- chronologicalFrontier: **2023-12-06**（一部地域テスト導入。12/4表記とのCONFLICT保持）
- frontierLatestMachine: **パチスロ琉神－30 スイカバージョン — No.1612**
- schema: **resetBehavior v0.7**
- status: **2023-12-04_GROUP_CLOSED_7_OF_7_CANONICAL + 2023-12-06_REGIONAL_TEST_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1608 `L花の慶次～佐渡攻めの章` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 前handoff指定の未処理機種を順番どおり処理し、No.1609 `LモンキーターンV`、No.1610 `Lマジカルハロウィン8`、No.1611 `Sクランキークレスト` を追加。
- 2023-12-04 canonical 7機を全件処理し CLOSED。
- 境界CONFLICTだった `パチスロ琉神－30 スイカバージョン` は、業界記事が「12月から一部地域テスト」、一撃実戦資料が「2023-12-06より一部地域テスト」と明記する一方、複数DBが12/4導入表記。このため12/4通常全国導入群には混入せず、No.1612を `2023-12-06 一部地域テスト導入` として独立登録し、12/4表記をCONFLICT保持。

## No.1609 — LモンキーターンV
- path: `docs/real_machine_db/machines/2023-12-04_l-monkey-turn-v.md`
- formalModel: **Lモンキーターン5CE**
- inspectionCode: **3S0772**（公的一次本文照合未取得）
- releaseDate: **2023-12-04**
- 機械割: **97.9 / 98.9 / 104.5 / 110.2 / 114.9%**（設定1/2/4/5/6）
- AT初当り: **1/299.8 / 1/295.5 / 1/258.8 / 1/235.7 / 1/222.9**
- base: **約32G/50枚**
- 純増: **通常AT約2.5枚/G / 青島SG約4.0枚/G**
- reset: **通常795G+α→495G+α、最大6周期→4周期、激走チャージ間81G+α**
- 設定変更後非有利区間: **最低2G以上**
- 非有利区間中: **弱レア役=モードB以上濃厚 / 強レア役=天国濃厚 / 究極目=青島SPフリーズ濃厚**
- pure power: **天井G/周期・内部状態・モード・有利区間CARRY_OVER**
- reset detection: **1周期目111/222pt以外の優出開始は据え置き濃厚材料。ガックンはUNVERIFIED_AFTER_RESEARCH**
- record commit: **b6951d229e37f5d0901067a5846621b4db1119ed**

## No.1610 — Lマジカルハロウィン8
- path: `docs/real_machine_db/machines/2023-12-04_l-magical-halloween8.md`
- formalModel: **Lマジカルハロウィン8FE**
- inspectionCode: **3S0939**
- releaseDate: **2023-12-04**
- 機械割: **97.7 / 98.8 / 101.3 / 105.2 / 107.3 / 109.2%**
- ART初当り: **1/352.2 / 1/335.5 / 1/297.1 / 1/269.3 / 1/254.4 / 1/226.8**
- base: **約34G/50枚（設定差あり）**
- ART純増: **約1.0枚/G**
- normal ceiling: **最大777G+α**
- reset ceiling: **ランダム短縮、最大約600G+α。約100G発動例あり**
- reset benefit: **内部詠唱スタート → リプレイ成立後30G固定の低確率RT → 内部詠唱、どこまじ発生率大幅UP**
- power OFF→ON: **天井/有利区間/モード/状態CARRY_OVER**
- detection: **朝一1G目ガックンで設定変更濃厚（対策時除く）**
- record commit: **a30b80768060919545c001a91efa0b085460d4a3**

## No.1611 — Sクランキークレスト
- path: `docs/real_machine_db/machines/2023-12-04_s-cranky-crest.md`
- formalModel: **S/クランキークレスト/CR**
- releaseDate: **2023-12-04**
- settings: **1 / 2 / 5 / 6**
- BIG: **1/275.4 / 1/275.4 / 1/262.1 / 1/254.0**
- REG: **1/407.1 / 1/370.3 / 1/336.1 / 1/304.8**
- complete攻略機械割: **100.5 / 102.0 / 105.2 / 108.0%**
- market/通常攻略値: **98.5 / 99.9 / 103.0 / 105.6%**（単一二次系統のため定義分離）
- base: **約39.4G/50枚（設定1）**
- payout: **BIG最大279枚 / REG最大112枚**
- ceiling: **NOT_APPLICABLE**
- reset: **設定変更で有利区間RESET、据え置きはCARRY_OVER**
- reset detection: **朝一クランキーゾーン開始なら据え置き濃厚、有利区間ランプ判別不可、ガックンUNVERIFIED_AFTER_RESEARCH**
- record commit: **845dd5bc96ac76d5fb628568ff247fbb92ac512c**

## No.1612 — パチスロ琉神－30 スイカバージョン
- path: `docs/real_machine_db/machines/2023-12-06_s-ryujin30-suika-version.md`
- manufacturer: **オレンジ（製造） / 藤商事**
- formalModel: **S琉神RZ-30 スイカバージョン**
- inspectionCode: **330354**
- releaseDate: **2023-12-06 一部地域テスト導入**
- release conflict: **複数DBは2023-12-04表記。CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- 機械割: **97.4 / 99.1 / 101.1 / 104.1 / 106.4%**（設定1/2/4/5/6）
- 合算: **1/231.0 / 1/224.3 / 1/217.2 / 1/206.9 / 1/199.5**
- base: **約32.2G/50枚**
- 純増: **約3.0枚/G**
- payout: **BIG約200枚 / REG約70枚**
- normal ceiling: **999G+α**
- setting change: **天井G RESET / モード再抽選 / 専用朝イチモード**
- morning benefit: **朝イチモードは通常より天国移行率優遇、天国突入まで同モードをループ**
- power OFF→ON: **天井G・モードCARRY_OVER**
- numeric morning rate: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- gackun/detection: **UNVERIFIED_AFTER_RESEARCH**
- record commit: **ad4bb16d0e460ebea8cce414c7e986075933cc2c**

## 2023-12-04群 — CLOSED 7/7 canonical
1. Lラブ嬢3～Wご指名はいかがですか？～ — No.1605 DONE
2. L リングにかけろ1 V — No.1606 DONE
3. ニューシオサイ — No.1607 DONE
4. L花の慶次～佐渡攻めの章 — No.1608 DONE
5. LモンキーターンV — No.1609 DONE
6. Lマジカルハロウィン8 — No.1610 DONE
7. Sクランキークレスト — No.1611 DONE

境界監査:
- グリーンべるとの12/3更新一覧は4機のみだが、山佐/コナミ/ユニバーサル各系統資料・当時導入DBでモンキーV、マジハロ8、クランキークレストの12/4実導入を確認済み。
- 琉神-30は通常全国導入7機とは分離し、地域テスト導入レコードとしてNo.1612へ移動。12/4表記はレコード内CONFLICTとして残す。

## 次回再開地点
1. 最新mainを再同期し、No.1609〜1612と本handoffの反映を再取得確認。
2. 時系列本線は **2023-12-18群** の境界監査から開始。
3. 現在確認できる候補は以下3機。漏れ監査後、未処理先頭を **No.1613** として採番する。
   - スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION
   - ドラゴンハナハナ～閃光～-30
   - パチスロファイヤードリフト
4. 性能コア + resetBehavior v0.7を同時収集する。
5. 12/18群はALL7、当時業界スケジュール、メーカー/販売記事、型式/検定、実導入DBを横断し、PB・別型式・地域先行・延期/段階導入を確認してからCLOSED判定する。
6. 遡及QAカーソルは変更なし。次候補 `2007-07-09_genju-haou-t.md`（幻獣覇王T候補）は、時系列本線と並行する場合のみ最新mainで順序確認後に処理。

## 今回の主要ソース
取得日: 2026-09-13
- モンキーV: 山佐/業界導入告知、Amusement Japan、必勝本、一撃、なな徹、ぽこすろっと、型式整理資料。
- マジハロ8: コナミ公式、パチビー、K-Navi、HAZUSE、パチマガスロマガ、なな徹、一撃、スロットセブン。
- クランキークレスト: ユニバーサル公式、遊技通信、P-WORLD、パチビー、必勝本、なな徹、HAZUSE、ぽこすろっと。
- 琉神-30: 藤商事公式、遊技日本、遊技通信、一撃、必勝本、HAZUSE。
- 12月導入群監査: https://www.all7.jp/plans/index/2023/12 / https://news.p-world.co.jp/articles/26197/greenbelt

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
