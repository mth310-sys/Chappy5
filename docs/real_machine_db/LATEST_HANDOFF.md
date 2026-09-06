# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **783**
- latestMachineAddedByChronology: **パチスロ獣王 王者の帰還**（Sammy / サミー）
- latestRecord: `docs/real_machine_db/machines/2013-12-02_jyuoh-oja-no-kikan.md`
- chronologicalFrontier: **2013-12-02**
- frontierLatestExactDateMachine: **パチスロ獣王 王者の帰還**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-12-02_GROUP__NEXT_2013-12-15_QUEENS_BLADE2_BATTLE_VERSION_CANDIDATE**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-12-02_shonan-junai-gumi.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 782 / chronologicalFrontier 2013-12-02 / 12-02群OPEN / 次候補「パチスロ獣王 王者の帰還」。
- GitHub内に既存レコードがない **パチスロ獣王 王者の帰還（Sammy）** を783件目として追加。
- 2013-12-02同日群はK-Navi / HAZUSE / P-WORLD / 当時業界記事等で再監査し、既処理 **うる星やつら3 / スゴスロ / パチスロ湘南純愛組！ / パチスロ獣王 王者の帰還** 以外の具体導入日付き未登録パチスロを今回固定できず、`CLOSED_FOR_CURRENT_RESEARCH`。
- 12/03～12/14境界を確認。次の未処理候補として、JPS **「パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン」**の **2013-12-15納品予定**を当時業界記事で確認。既存8/19ベース機とはAT初当たり・純増・最大出玉率が異なる追加スペックのため、独立レコード候補として扱う。
- その次の強いアンカーは **2013-12-16「SLOT魔法少女まどか☆マギカ」 / 「吉宗（2013年）」**。両機ともK-Navi等で12/16導入を確認済み。

## 今回追加 — パチスロ獣王 王者の帰還

### identity / 性能コア

- manufacturer: **Sammy / サミー**。
- 型式: **獣王ZS** / 検定番号 **3S0773**。
- releaseDate: **2013-12-02**。K-Navi / HAZUSE一致。Sammy公式は2013-10-28に発売告知。
- generation/system: **5号機 / AT / 擬似ボーナス / CZ / ゲーム数管理CZ / 天井**。
- 獣BONUS初当たり: **1/263.2 / 261.5 / 250.3 / 229.3 / 224.2 / 223.4**。
- AT初当たり: **1/451.3 / 427.8 / 399.9 / 356.5 / 306.3 / 245.0**。
- baseGamesPer50: **約30.1G/50枚**。HAZUSE、みんスロ約30Gと整合。
- AT「サバンナチャンス」: **初当たり50G+α / 純増約2.5枚/G**。
- 通常最大天井: **967G+最大32G前兆 = 999G相当**、AT確定。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### payout conflict

- HAZUSE/みんスロ: **97.2 / 98.6 / 100.4 / 105.0 / 110.3 / 116.9%**。
- pacnk: **97.2 / 98.6 / 100.3 / 104.9 / 111.2 / 116.9%**。
- スロパチクエスト: **97.2 / 98.6 / 100.4 / 105.0 / 111.3 / 116.9%**。
- 特に設定5は **110.3 vs 111.2 vs 111.3** で単純丸めとはみなさず `CONFLICT_PAYOUT_SETTING5_110_3_VS_111_2_VS_111_3`。平均化しない。

### resetBehavior v0.7

- setting change: **天国 or モーニングへ移行**。モーニングは設定変更時のみ選択される特殊モード。
- gameCounterReset: 前日の通常最大999G進捗は設定変更後の専用モード契約へ置換され、通常天井をそのまま宵越ししない。
- ceilingAfterReset: **天国100G+前兆 / モーニング600G+前兆**。通常最大999G相当から明確に短縮。
- modeAfterReset: 後続解析値で **天国11% / モーニング89%**。2014年初期記事では具体比率未判明だったため公開時点差を注記。
- carry-over: 当時攻略資料で **据え置き時は宵越し内部ゲーム数に基づく獣王モード前兆挙動**を確認。内部G進捗が機能することまでは採用。
- power OFF→ON only: 天井G / モード / 状態の保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: 設定変更専用の低確/通常/高確/超高確振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits: 最大天井600G+前兆へ短縮、約11%天国なら100G+前兆以内。モーニングでも朝一CZ当選率が高い。
- resetDetection: 朝一0/32/50/64/100G付近の前兆と、据え置き時の宵越し内部Gに基づく前兆の差が変更推測材料。ガックン等の確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **天国11% / モーニング89% / 天国天井100G+前兆 / モーニング天井600G+前兆**。CZ率は後年整理のモーニング100G以内約40%、初期記事50G以内45%、実戦値100G以内約60%があり、区間/解析・実戦差のため平均しない。

## safeguards / conflicts

- `CONFLICT_PAYOUT_SETTING5_110_3_VS_111_2_VS_111_3` を保持。
- 通常天井967G+最大32Gと999Gは内部到達G/前兆込み最大表示の定義差でCONFLICT化しない。
- 朝一CZ率 **約40% / 45% / 実戦約60%**は母集団・区間・解析/実戦値が異なるためCONFLICT平均化しない。
- 2017年「獣王 王者の覚醒」や2019年「猛獣王 王者の咆哮」のリセット仕様を2013年本機へ混入させない。

## 2013-12-02群

- 処理済み: **うる星やつら3 / スゴスロ / パチスロ湘南純愛組！ / パチスロ獣王 王者の帰還**。
- status: **CLOSED_FOR_CURRENT_RESEARCH**。

## 12/03～次アンカー境界

- 2013-12-15納品予定: **パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン（JPS）**。
  - 当時グリーンべると転載資料で、8月導入ベース機の追加スペックとして発表。
  - AT初当たり **1/418（設定1）～1/319（設定6）**、純増 **2.8枚/G**、最大出玉率 **110.69%**。ベース機の純増2.5枚/G・最大108.17%から差があるため独立候補。
- 2013-12-16: **SLOT魔法少女まどか☆マギカ（メーシー）**、**吉宗（2013年）（大都技研）**を具体導入日付きアンカーとして確認。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線783件目を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 783 / chronologicalFrontier 2013-12-02 / 12-02群CLOSED** から開始。
2. 次の未処理候補 **「パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン」（JPS、2013-12-15納品予定）** を、ベース機との型式/別スペック同定を最優先して性能コア + resetBehavior v0.7で処理。
3. バトルバージョンのホール導入具体日が12/15か12/16か資料差が出た場合は `CONFLICT_RELEASE_DATE/DELIVERY_VS_HALL_START` として定義を分離し、推測で固定しない。
4. その後 **2013-12-16群「SLOT魔法少女まどか☆マギカ」→「吉宗（2013年）」** を含む全メーカー横断監査へ進む。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で最初のresetBehavior欠損機を確定し補完。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合はCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- Sammy公式: `https://www.sammy.co.jp/japanese/news/2013/95.html`
- K-Navi 獣王: `https://p-kn.com/slot/1962/`
- HAZUSE 獣王: `https://hazuse.com/machine/pachislot/3S0773/`
- HAZUSE AT/ART: `https://hazuse.com/machine/pachislot/3S0773/genre/209/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7247`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/140/00.php`
- パチマガ状態示唆: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/140/ens03.php`
- pacnk: `https://pacnk.com/slot/tools/sh_jyuou2013.html`
- スロパチクエスト機種まとめ: `https://www.slopachi-quest.com/kisyubetsu/zyuou/`
- スロパチクエスト設定変更挙動: `https://www.slopachi-quest.com/article/zyuou-reset/`
- スロパチクエスト朝一: `https://www.slopachi-quest.com/article/zyuou-reset-capture/`
- 期待値見える化: `https://slotjin.com/slot/jyuou-asaichi/`
- スロットガーデン: `https://xn--mckza4ard4ttb2d.com/juou`
- kokoスロ: `https://kslot.seesaa.net/article/392628260.html`
- 2013-12-13実戦記事: `https://ameblo.jp/coffeebreak800/entry-11728902376.html`
- みんスロ: `https://minslo.com/%E7%8D%A3%E7%8E%8B-%E7%8E%8B%E8%80%85%E3%81%AE%E5%B8%B0%E9%82%84/`
- 2013-12-09業界転載（QB2バトル版）: `https://p-mans.blogspot.com/2013/12/`
- K-Navi まどか☆マギカ: `https://p-kn.com/slot/1980/`
- HAZUSE まどか☆マギカ: `https://hazuse.com/machine/pachislot/3S0820/`
- K-Navi 吉宗2013: `https://p-kn.com/slot/1960/`
